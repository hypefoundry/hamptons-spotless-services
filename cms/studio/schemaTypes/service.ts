import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Shown in the Services list and as a selectable option in the contact form.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 100,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'showInContactForm',
      title: 'Show as a contact-form option',
      type: 'boolean',
      description: 'When on, this service appears as a checkbox under "Service of Interest" in the contact form.',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', order: 'order'},
    prepare({title, order}) {
      return {title, subtitle: `Order: ${order ?? '—'}`}
    },
  },
})
