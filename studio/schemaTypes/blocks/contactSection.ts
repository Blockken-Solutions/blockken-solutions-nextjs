import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactSection',
  title: 'Contact section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'showContactDetails',
      title: 'Show contact details from site settings',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: title || 'Contact',
        subtitle: 'Contact section',
      }
    },
  },
})
