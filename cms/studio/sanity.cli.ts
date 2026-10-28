import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'bbackimq'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineCliConfig({
  api: {projectId, dataset},
  // Hosted Studio subdomain -> https://hamptonsspotless.sanity.studio
  studioHost: 'hamptonsspotless',
  deployment: {
    appId: 'zt3cwj9uah1461jo1r4zm78k',
    autoUpdates: true,
  },
})
