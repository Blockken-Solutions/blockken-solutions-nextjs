import {createPresetsRegistry} from '@sanity/presets'
import {defineField} from 'sanity'

import contactSection from './blocks/contactSection'
import faq from './blocks/faq'
import features from './blocks/features'
import hero from './blocks/hero'
import projectsGrid from './blocks/projectsGrid'
import testimonial from './blocks/testimonial'
import project from './project'
import siteSettings from './documents/siteSettings'
import {seo} from './shared/seo'

const {defineCta, defineImage, definePage, defineRichText, defineLink} = createPresetsRegistry({
  link: {to: ['page']},
})

const link = defineLink({name: 'link', title: 'Link', to: ['page']})
const imageBlock = defineImage({name: 'imageBlock', title: 'Image'})
const cta = defineCta({name: 'cta', title: 'Call to action'})
const richText = defineRichText({name: 'richText', title: 'Rich text'})

const page = definePage({
  name: 'page',
  title: 'Page',
  pageBuilderBlocks: [
    'hero',
    'features',
    'faq',
    'contactSection',
    'projectsGrid',
    'testimonial',
    'imageBlock',
    'cta',
    'richText',
  ],
  fields: [
    defineField({
      name: 'noIndex',
      title: 'Hide from search engines',
      type: 'boolean',
      group: 'metadata',
      initialValue: false,
    }),
  ],
})

export const schemaTypes = [
  page,
  siteSettings,
  project,
  seo,
  link,
  hero,
  features,
  faq,
  contactSection,
  projectsGrid,
  testimonial,
  imageBlock,
  cta,
  richText,
]
