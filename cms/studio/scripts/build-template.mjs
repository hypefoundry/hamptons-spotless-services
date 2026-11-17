// Precompile the site template (cms/template/index.njk) into a browser-safe
// module the in-Studio Preview tab can render without the Nunjucks compiler
// (which needs eval and can't run in the bundled Studio).
//
// Runs automatically before `npm run dev|build|deploy` (see package.json).

import nunjucks from 'nunjucks'
import {readFileSync, writeFileSync, mkdirSync} from 'node:fs'
import {fileURLToPath} from 'node:url'
import {dirname, join, resolve} from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const templatePath = resolve(__dirname, '..', '..', 'template', 'index.njk')
const outDir = resolve(__dirname, '..', 'src', 'generated')
const outFile = join(outDir, 'templatePrecompiled.js')

const src = readFileSync(templatePath, 'utf8')

// Precompile with the same options the production build uses (autoescape on).
const env = new nunjucks.Environment([], {autoescape: true, trimBlocks: false, lstripBlocks: false})
const compiled = nunjucks.precompileString(src, {name: 'index.njk', env})

mkdirSync(outDir, {recursive: true})
writeFileSync(
  outFile,
  '/* AUTO-GENERATED from cms/template/index.njk by scripts/build-template.mjs. Do not edit. */\n' +
    '/* eslint-disable */\n' +
    compiled +
    '\n',
)

console.log(`✓ Precompiled template -> ${outFile}`)
