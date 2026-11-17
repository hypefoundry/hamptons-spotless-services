import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. "Southampton". Shown in the Areas list and marquee.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region (for SEO)',
      type: 'string',
      description: 'State / region appended in the structured-data "areaServed" list, e.g. "NY". Not shown on the page.',
      initialValue: 'NY',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 100,
      validation: (rule) => rule.required(),
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
    select: {name: 'name', region: 'region', order: 'order'},
    prepare({name, region, order}) {
      return {title: name, subtitle: `${region || ''}  ·  Order: ${order ?? '—'}`}
    },
  },
})
