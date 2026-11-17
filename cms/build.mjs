// Build pipeline: render index.html from Sanity content (or a local fixture).
//
//   node build.mjs                 # fetch published content from Sanity
//   node build.mjs --fixture       # render from seed/content.json (offline)
//   node build.mjs --fixture=path  # render from a specific JSON fixture
//   node build.mjs --out=dir       # output directory (default: dist)
//
// Env (for the Sanity source):
//   SANITY_PROJECT_ID   required unless --fixture is used
//   SANITY_DATASET      default "production"

import {readFileSync, rmSync, mkdirSync, cpSync, writeFileSync, existsSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {dirname, join, resolve} from 'node:path'
import nunjucks from 'nunjucks'
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')

// ── CLI args ────────────────────────────────────────────────
const args = process.argv.slice(2)
const getArg = (name) => {
  const hit = args.find((a) => a === `--${name}` || a.startsWith(`--${name}=`))
  if (!hit) return undefined
  const eq = hit.indexOf('=')
  return eq === -1 ? true : hit.slice(eq + 1)
}
const fixtureArg = getArg('fixture')
const outDir = resolve(__dirname, typeof getArg('out') === 'string' ? getArg('out') : 'dist')

// ── Image defaults (used when no image is set in Sanity) ────
const DEFAULTS = {
  heroImage: {src: 'assets/hamptons-featureimg-1.jpg', alt: 'Elegant Hamptons living room with fireplace and garden views'},
  aboutImage: {src: 'assets/hamptons-featureimg-2.jpg', alt: 'Bright Hamptons kitchen and dining room'},
  ogImage: 'assets/hamptons-socialshare-img.png',
  twitterImage: 'assets/hamptons-twitter-social.png',
}

const GROQ = `{
  "site": *[_type == "siteSettings"][0],
  "services": *[_type == "service"] | order(order asc){title, description, showInContactForm},
  "serviceAreas": *[_type == "serviceArea"] | order(order asc){name, region},
  "testimonials": *[_type == "testimonial"] | order(order asc){quote, attribution}
}`

async function loadFromSanity() {
  const projectId = process.env.SANITY_PROJECT_ID || 'bbackimq'
  const dataset = process.env.SANITY_DATASET || 'production'
  // useCdn:false so a publish-triggered build always renders the freshest
  // published content (the CDN can lag a few seconds behind a publish).
  const client = createClient({projectId, dataset, apiVersion: '2024-01-01', useCdn: false})
  const builder = imageUrlBuilder({projectId, dataset})
  const raw = await client.fetch(GROQ)
  return {raw, builder}
}

function loadFromFixture() {
  const path = typeof fixtureArg === 'string' ? resolve(process.cwd(), fixtureArg) : join(__dirname, 'seed', 'content.json')
  const json = JSON.parse(readFileSync(path, 'utf8'))
  // The fixture mirrors the Sanity document shape; map it to the GROQ result shape.
  const raw = {
    site: json.siteSettings,
    services: json.services || [],
    serviceAreas: json.serviceAreas || [],
    testimonials: json.testimonials || [],
  }
  return {raw, builder: null}
}

// Escape text for HTML, then turn newlines into <br>.
function toHtml(text) {
  const esc = String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return esc.replace(/\n/g, '<br>')
}

function resolveImage(builder, img, fallback) {
  if (img && img.asset && builder) {
    return {src: builder.image(img).auto('format').url(), alt: img.alt || fallback.alt}
  }
  // Fixture may provide a plain {src, alt}; otherwise fall back to defaults.
  if (img && typeof img.src === 'string') return {src: img.src, alt: img.alt || fallback.alt}
  return {...fallback}
}

function buildData({raw, builder}) {
  const s = raw.site || {}
  const services = raw.services || []
  const areas = raw.serviceAreas || []
  const testimonials = raw.testimonials || []

  const site = {
    ...s,
    // Split the areas heading on "|" so editors can force a desktop line break
    // (collapses to natural wrapping on mobile via .areas-hd-break).
    areasHeadingLines: String(s.areasHeading || '')
      .split('|')
      .map((t) => t.trim())
      .filter(Boolean),
    heroImage: resolveImage(builder, s.heroImage, DEFAULTS.heroImage),
    aboutImage: resolveImage(builder, s.aboutImage, DEFAULTS.aboutImage),
    ogImage: s.ogImage || DEFAULTS.ogImage,
    twitterImage: s.twitterImage || DEFAULTS.twitterImage,
    successModalBodyHtml: toHtml(s.successModalBody || ''),
  }

  const jsonLd = JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: s.businessName,
      description: s.schemaDescription,
      telephone: s.phoneTel,
      email: s.email,
      areaServed: areas.map((a) => `${a.name}, ${a.region || 'NY'}`),
      serviceType: s.seoServiceTypes || [],
    },
    null,
    2,
  )

  return {site, services, areas, testimonials, jsonLd}
}

async function main() {
  const source = fixtureArg ? loadFromFixture() : await loadFromSanity()
  const data = buildData(source)

  // Sanity check: required top-level content must exist.
  if (!data.site || !data.site.seoTitle) {
    throw new Error('No siteSettings content found. Has the dataset been seeded?')
  }
  if (!data.services.length) console.warn('⚠  No services found — the Services section will be empty.')
  if (!data.areas.length) console.warn('⚠  No service areas found — the Areas section will be empty.')

  const env = nunjucks.configure(join(__dirname, 'template'), {autoescape: true, trimBlocks: false, lstripBlocks: false})
  const html = env.render('index.njk', data)

  if (html.includes('{{') || html.includes('{%')) {
    throw new Error('Rendered output still contains unresolved template tokens ({{ or {%).')
  }

  // Assemble the output directory: index.html + assets + CNAME.
  rmSync(outDir, {recursive: true, force: true})
  mkdirSync(outDir, {recursive: true})
  writeFileSync(join(outDir, 'index.html'), html)
  cpSync(join(repoRoot, 'assets'), join(outDir, 'assets'), {recursive: true})
  if (existsSync(join(repoRoot, 'CNAME'))) cpSync(join(repoRoot, 'CNAME'), join(outDir, 'CNAME'))

  console.log(`✓ Built ${join(outDir, 'index.html')}`)
  console.log(`  services: ${data.services.length}  areas: ${data.areas.length}  testimonials: ${data.testimonials.length}`)
}

main().catch((err) => {
  console.error('✗ Build failed:', err.message)
  process.exit(1)
})
