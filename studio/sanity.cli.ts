import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_DATASET!,
  },
  deployment: {
    autoUpdates: true,
  },
  typegen: {
    enabled: true,
    path: '../website/src/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../website/src/sanity/sanity.types.ts',
    overloadClientMethods: true,
  },
})
