import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsGrid',
  title: 'Projects grid',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Projects',
        subtitle: 'Projects grid',
      }
    },
  },
})
