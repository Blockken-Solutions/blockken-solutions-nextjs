import {createPresetsRegistry} from '@sanity/presets'
import {defineField} from 'sanity'

const {defineSeo} = createPresetsRegistry()

export const seo = defineSeo({
  name: 'seo',
  title: 'SEO',
  map: {
    fields: (fields = []) => [
      ...fields,
      defineField({
        name: 'noIndex',
        title: 'Hide from search engines',
        type: 'boolean',
        initialValue: false,
      }),
    ],
  },
})
