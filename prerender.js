// Renders the landing page to static HTML after the client build, so crawlers
// that do not execute JavaScript — including most AI answer engines — see the
// full page instead of an empty <div id="root">. The client hydrates it.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'

const root = process.cwd()
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))

const marker = '<div id="root"></div>'
if (!template.includes(marker)) {
  throw new Error('prerender: could not find the empty root div in dist/index.html')
}

const html = template.replace(marker, `<div id="root">${render('/')}</div>`)
writeFileSync(resolve(root, 'dist/index.html'), html)
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`prerender: wrote ${(html.length / 1024).toFixed(1)}kB of static HTML into dist/index.html`)
