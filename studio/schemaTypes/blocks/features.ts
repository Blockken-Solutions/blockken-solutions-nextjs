import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'featureItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Optional Lucide icon name',
            }),
          ],
          preview: {
            select: {title: 'title'},
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Features',
        subtitle: 'Features section',
      }
    },
  },
})
