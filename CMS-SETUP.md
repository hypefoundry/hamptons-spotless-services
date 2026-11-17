# Hamptons Spotless Services — CMS

The site copy, services, and service areas are managed in **Sanity**. A small
build step renders `index.html` from Sanity content, and **GitHub Actions**
redeploys GitHub Pages whenever content is published. Because the HTML is
rendered at build time, all SEO-critical copy (headings, service areas,
structured data, social tags) stays baked into the page — nothing depends on
client-side JavaScript.

```
Sanity content ──> cms/build.mjs (Nunjucks) ──> cms/dist/index.html ──> GitHub Pages
   (editing)              (render)                   (output)            (hamptonsspotless.com)
```

## Repository layout

```
index.html              Legacy hand-authored page (reference). Not used once the
                        GitHub Actions deploy is live — see "Cut over" below.
assets/                 Images, fonts, SVGs (served as-is).
CNAME                   Custom domain (copied into the build output).
cms/
  template/index.njk    The page as a Nunjucks template (static HTML + CSS + JS,
                        with dynamic regions driven by Sanity).
  build.mjs             Fetches Sanity content and renders cms/dist/index.html.
  seed.mjs              One-time import of the current copy into Sanity.
  seed/content.json     The current copy as a fixture (seed source + offline build).
  studio/               The Sanity Studio (the admin UI the client logs into).
.github/workflows/deploy.yml   Build + deploy to GitHub Pages.
```

---

## ⚠ One blocker before anything goes live

The Sanity account used here (`hello@hypefoundry.studio`) is **not permitted to
create a project** in the only organisation it belongs to ("Active Property
Investing") — it is missing the `sanity.organization.projects/attach` grant. So
the project must be created by someone with that permission. Two options:

- **A.** Grant that account project-creation rights in the org, **or**
- **B.** Create the project with any permitted account (steps below).

Everything else in this repo is already built and only needs the resulting
**project ID** wired in (a single value).

---

## Setup (once)

### 1. Create the Sanity project + dataset

With a permitted account:

```bash
cd cms/studio
npm install
npx sanity login
npx sanity init --project-plan free   # or create at https://sanity.io/manage
```

Or via CLI in one shot (public dataset so the build can read it without a token):

```bash
npx sanity projects create "Hamptons Spotless Services" \
  --organization <org-id> --dataset production --dataset-visibility public --yes
```

Note the **project ID** it returns.

### 2. Point the Studio + build at the project

Set the project ID wherever you run these tools. Locally, copy `cms/.env.example`
to `cms/.env` and fill it in. For the Studio, the config reads
`SANITY_STUDIO_PROJECT_ID` (falls back to `production` for the dataset):

```bash
export SANITY_STUDIO_PROJECT_ID=<project-id>
export SANITY_STUDIO_DATASET=production
```

### 3. Seed the current copy into Sanity

Create an **Editor token** at sanity.io/manage → API → Tokens, then:

```bash
cd cms
npm install
SANITY_PROJECT_ID=<project-id> SANITY_WRITE_TOKEN=<token> node seed.mjs
```

This loads Site Settings, the 7 services, 10 service areas, and the testimonial
— matching the current live site exactly. Safe to re-run (resets seeded docs to
the fixture; does not touch anything added later).

### 4. Deploy the Studio (the client's editing URL)

```bash
cd cms/studio
SANITY_STUDIO_PROJECT_ID=<project-id> npx sanity deploy
# studioHost is preset to "hamptonsspotless" -> https://hamptonsspotless.sanity.studio
```

Invite the client at sanity.io/manage → Members (free viewer/editor seats).

### 5. Allow the website origin (CORS)

```bash
cd cms/studio
npx sanity cors add https://hamptonsspotless.com --no-credentials
npx sanity cors add https://hamptonsspotless.sanity.studio --credentials
```

### 6. Wire up GitHub Pages deployment

In the GitHub repo (`hypefoundry/hamptons-spotless-services`):

1. **Settings → Secrets and variables → Actions → New repository secret**
   - `SANITY_PROJECT_ID` = your project ID
   - `SANITY_DATASET` = `production`
2. **Settings → Pages → Build and deployment → Source → GitHub Actions.**
   (It is currently "Deploy from a branch" — switching to Actions is what makes
   `deploy.yml` the thing that publishes the site.)
3. Push this branch / merge to `main`. The workflow builds from Sanity and
   deploys. Check the **Actions** tab for the run and the live URL.

> This environment's `gh` CLI token was invalid, so these repo settings and the
> push could not be done automatically — they need to be done by someone with
> repo admin access.

### 7. Auto-redeploy when content is published

Create a GitHub **fine-grained PAT** with `contents: read` + the "repository
dispatch" ability (classic PAT with `repo` scope also works). Then in Sanity:

sanity.io/manage → API → **Webhooks → Create webhook**
- **URL:** `https://api.github.com/repos/hypefoundry/hamptons-spotless-services/dispatches`
- **Trigger on:** Create, Update, Delete
- **Filter:** `_type in ["siteSettings","service","serviceArea","testimonial"]`
- **HTTP method:** POST
- **HTTP headers:**
  - `Authorization: Bearer <PAT>`
  - `Accept: application/vnd.github+json`
- **Projection:** `{ "event_type": "sanity-publish" }`

Now every publish fires `repository_dispatch` → the workflow rebuilds and
redeploys (usually live in ~1–2 minutes).

### Cut over

Once a workflow deploy succeeds and the site looks right, the root `index.html`
is no longer served (Pages now serves the Actions build). You can delete it, or
keep it as a reference snapshot. Until you switch Pages to "GitHub Actions" in
step 6, the current live site is untouched.

---

## What the client can edit

Logging in at **hamptonsspotless.sanity.studio** they'll see:

- **Site Settings** (one document) — all page copy, grouped by section: Business
  & Contact, Hero, Services header, Areas header, About, Testimonials, Contact,
  Footer, SEO & Social.
- **Services** — add / delete / reorder. Each has a title, description, display
  order, and a "show as a contact-form option" toggle. These drive the Services
  list **and** the contact-form checkboxes.
- **Service Areas** — add / delete / reorder. Name + region (region is SEO-only).
  These drive the areas list, the mobile marquee, and the structured data.
- **Testimonials** — add / delete / reorder. Add a second one and the carousel
  controls (dots + arrows) appear automatically.

Edits go live on **Publish** (via the webhook) — no code or deploys needed.

---

## Local development

```bash
cd cms
npm install

# Build from live Sanity content:
SANITY_PROJECT_ID=<id> SANITY_DATASET=production node build.mjs

# Build offline from the fixture (no Sanity needed) — handy for template work:
node build.mjs --fixture

# Output is written to cms/dist/. Open cms/dist/index.html in a browser.
```

Run the Studio locally:

```bash
cd cms/studio
npm install
SANITY_STUDIO_PROJECT_ID=<id> npx sanity dev   # http://localhost:3333
```

## Editing the template / design

`cms/template/index.njk` is the real page. Static markup, CSS, and JS live there
verbatim; dynamic regions use `{{ site.* }}` values and `{% for %}` loops over
`services`, `areas`, and `testimonials`. After changing it, run
`node build.mjs --fixture` and open `cms/dist/index.html` to check.
