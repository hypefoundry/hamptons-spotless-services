import type {StructureResolver} from 'sanity/structure'

// Custom desk layout: a single "Site Settings" editor (no list),
// plus orderable lists for the collection types the client manages.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),
      S.divider(),
      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(
          S.documentTypeList('service')
            .title('Services')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Service Areas')
        .schemaType('serviceArea')
        .child(
          S.documentTypeList('serviceArea')
            .title('Service Areas')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Testimonials')
        .schemaType('testimonial')
        .child(
          S.documentTypeList('testimonial')
            .title('Testimonials')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
    ])
