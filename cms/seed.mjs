// One-time seed: import the current site copy into Sanity from seed/content.json.
//
//   SANITY_PROJECT_ID=xxxx SANITY_WRITE_TOKEN=yyyy node seed.mjs
//
// Uses createOrReplace with deterministic _ids, so it is safe to re-run
// (it will reset the seeded documents to the fixture values). It does NOT
// delete documents the client has added since.

import {readFileSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'
import {createClient} from '@sanity/client'

const __dirname = dirname(fileURLToPath(import.meta.url))

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Set SANITY_PROJECT_ID and SANITY_WRITE_TOKEN (an Editor token) before running.')
  process.exit(1)
}

const client = createClient({projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false})

const data = JSON.parse(readFileSync(join(__dirname, 'seed', 'content.json'), 'utf8'))

const docs = []

// Singleton settings
docs.push({_id: 'siteSettings', _type: 'siteSettings', ...data.siteSettings})

// Collections with stable ids
;(data.services || []).forEach((s, i) => {
  docs.push({_id: `service-${i + 1}`, _type: 'service', ...s})
})
;(data.serviceAreas || []).forEach((a, i) => {
  docs.push({_id: `serviceArea-${i + 1}`, _type: 'serviceArea', ...a})
})
;(data.testimonials || []).forEach((t, i) => {
  docs.push({_id: `testimonial-${i + 1}`, _type: 'testimonial', ...t})
})

const tx = docs.reduce((t, doc) => t.createOrReplace(doc), client.transaction())

tx.commit()
  .then(() => {
    console.log(`✓ Seeded ${docs.length} documents into ${projectId}/${dataset}`)
    console.log('  Publish happens automatically (these are published docs).')
  })
  .catch((err) => {
    console.error('✗ Seed failed:', err.message)
    process.exit(1)
  })
