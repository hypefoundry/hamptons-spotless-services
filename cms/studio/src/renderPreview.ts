// Browser-side renderer for the in-Studio Preview tab.
// Mirrors the transform in cms/build.mjs, then renders the precompiled
// template with the Nunjucks slim runtime (no compiler / no eval needed).

// @ts-expect-error - slim browser build ships no types
import nunjucks from 'nunjucks/browser/nunjucks-slim'
import imageUrlBuilder from '@sanity/image-url'
import type {SanityClient} from 'sanity'
// Side-effect import: registers window.nunjucksPrecompiled['index.njk']
import './generated/templatePrecompiled.js'

const DEFAULTS = {
  heroImage: {
    src: 'assets/hamptons-featureimg-1.jpg',
    alt: 'Elegant Hamptons living room with fireplace and garden views',
  },
  aboutImage: {src: 'assets/hamptons-featureimg-2.jpg', alt: 'Bright Hamptons kitchen and dining room'},
  ogImage: 'assets/hamptons-socialshare-img.png',
  twitterImage: 'assets/hamptons-twitter-social.png',
}

// Where relative assets (images, fonts) in the rendered page resolve from.
const LIVE_ORIGIN = 'https://hamptonsspotless.com/'

const nunjucksGlobal = nunjucks || (window as any).nunjucks
const env = new nunjucksGlobal.Environment(
  new nunjucksGlobal.PrecompiledLoader((window as any).nunjucksPrecompiled),
  {autoescape: true},
)

function escapeHtml(text: string): string {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function toHtml(text: string): string {
  return escapeHtml(text).replace(/\n/g, '<br>')
}

function resolveImage(client: SanityClient, img: any, fallback: {src: string; alt: string}) {
  if (img && img.asset) {
    try {
      return {src: imageUrlBuilder(client).image(img).auto('format').url(), alt: img.alt || fallback.alt}
    } catch {
      /* fall through to default */
    }
  }
  if (img && typeof img.src === 'string') return {src: img.src, alt: img.alt || fallback.alt}
  return {...fallback}
}

function buildData(raw: any, client: SanityClient) {
  const s = raw?.site || {}
  const services = raw?.services || []
  const areas = raw?.serviceAreas || []
  const testimonials = raw?.testimonials || []

  const site = {
    ...s,
    areasHeadingLines: String(s.areasHeading || '')
      .split('|')
      .map((t: string) => t.trim())
      .filter(Boolean),
    heroImage: resolveImage(client, s.heroImage, DEFAULTS.heroImage),
    aboutImage: resolveImage(client, s.aboutImage, DEFAULTS.aboutImage),
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
      areaServed: areas.map((a: any) => `${a.name}, ${a.region || 'NY'}`),
      serviceType: s.seoServiceTypes || [],
    },
    null,
    2,
  )

  return {site, services, areas, testimonials, jsonLd}
}

export function renderPreviewHtml(raw: any, client: SanityClient): string {
  const data = buildData(raw, client)
  let html = env.render('index.njk', data) as string
  // Resolve relative assets from the live site, and force fade-in content
  // visible (its reveal is normally driven by a scroll observer).
  const injected =
    `<base href="${LIVE_ORIGIN}">` +
    '<style>.fade-in{opacity:1 !important;transform:none !important}</style>'
  html = html.replace('<head>', `<head>\n${injected}`)
  return html
}
