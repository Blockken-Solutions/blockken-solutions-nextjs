import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {StudioIcon} from './components/studio-icon'
import {brandTheme} from './theme'

import './studio.css'

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE ?? 'Sanity Studio',
  icon: StudioIcon,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  theme: brandTheme,

  plugins: [
    structureTool({structure}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
