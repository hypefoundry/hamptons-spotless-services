import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'business', title: 'Business & Contact'},
    {name: 'hero', title: 'Hero'},
    {name: 'services', title: 'Services (section header)'},
    {name: 'areas', title: 'Service Areas (section header)'},
    {name: 'about', title: 'About'},
    {name: 'testimonials', title: 'Testimonials'},
    {name: 'contact', title: 'Contact'},
    {name: 'footer', title: 'Footer'},
    {name: 'seo', title: 'SEO & Social'},
  ],
  fields: [
    // ── Business & Contact ──────────────────────────────
    defineField({
      name: 'businessName',
      title: 'Business name',
      type: 'string',
      group: 'business',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phoneDisplay',
      title: 'Phone (as displayed)',
      type: 'string',
      description: 'e.g. "(631) 388-1263".',
      group: 'business',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phoneTel',
      title: 'Phone (dial format)',
      type: 'string',
      description: 'Digits only with country code, used in tap-to-call links. e.g. "+16313881263".',
      group: 'business',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'business',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'business',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'business',
    }),

    // ── Hero ────────────────────────────────────────────
    defineField({
      name: 'heroLabel',
      title: 'Overline label',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadingLines',
      title: 'Headline (one line per entry)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Each entry is rendered on its own line.',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Sub-text',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Button text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
      fields: [
        defineField({name: 'alt', title: 'Alt text', type: 'string'}),
      ],
    }),

    // ── Services section header ─────────────────────────
    defineField({
      name: 'servicesLabel',
      title: 'Overline label',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesHeading',
      title: 'Heading',
      type: 'string',
      group: 'services',
    }),
    defineField({
      name: 'servicesIntro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
      group: 'services',
    }),
    defineField({
      name: 'servicesCtaText',
      title: 'Button text',
      type: 'string',
      group: 'services',
    }),

    // ── Areas section header ────────────────────────────
    defineField({
      name: 'areasLabel',
      title: 'Overline label',
      type: 'string',
      group: 'areas',
    }),
    defineField({
      name: 'areasHeading',
      title: 'Heading',
      type: 'string',
      group: 'areas',
    }),
    defineField({
      name: 'areasIntro',
      title: 'Intro paragraph',
      type: 'text',
      rows: 3,
      group: 'areas',
    }),

    // ── About ───────────────────────────────────────────
    defineField({
      name: 'aboutLabel',
      title: 'Overline label',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutParagraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 4}],
      group: 'about',
    }),
    defineField({
      name: 'trustPoints',
      title: 'Trust points',
      type: 'array',
      of: [{type: 'string'}],
      description: 'The short star-marked statements under the About copy.',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Image break',
      type: 'image',
      options: {hotspot: true},
      group: 'about',
      fields: [
        defineField({name: 'alt', title: 'Alt text', type: 'string'}),
      ],
    }),

    // ── Testimonials section ────────────────────────────
    defineField({
      name: 'testimonialsLabel',
      title: 'Overline label',
      type: 'string',
      group: 'testimonials',
    }),

    // ── Contact ─────────────────────────────────────────
    defineField({
      name: 'contactLabel',
      title: 'Overline label',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'contactHeadingLines',
      title: 'Heading (one line per entry)',
      type: 'array',
      of: [{type: 'string'}],
      group: 'contact',
    }),
    defineField({
      name: 'contactPhoneLabel',
      title: 'Phone label',
      type: 'string',
      initialValue: 'Phone',
      group: 'contact',
    }),
    defineField({
      name: 'contactEmailLabel',
      title: 'Email label',
      type: 'string',
      initialValue: 'Email',
      group: 'contact',
    }),
    defineField({
      name: 'contactFormHeading',
      title: 'Form checkbox group heading',
      type: 'string',
      initialValue: 'Service of Interest',
      group: 'contact',
    }),
    defineField({
      name: 'contactFormAction',
      title: 'Form submit URL (Formspree endpoint)',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'contactSubmitText',
      title: 'Submit button text',
      type: 'string',
      initialValue: 'Send Enquiry',
      group: 'contact',
    }),
    defineField({
      name: 'successModalHeading',
      title: 'Success message heading',
      type: 'string',
      initialValue: 'Thank You',
      group: 'contact',
    }),
    defineField({
      name: 'successModalBody',
      title: 'Success message body',
      type: 'text',
      rows: 2,
      description: 'The phone number is appended automatically.',
      group: 'contact',
    }),

    // ── Footer ──────────────────────────────────────────
    defineField({
      name: 'footerCopyright',
      title: 'Copyright line',
      type: 'string',
      group: 'footer',
    }),

    // ── SEO & Social ────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'Page title',
      type: 'string',
      group: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogDescription',
      title: 'Social share description',
      type: 'text',
      rows: 2,
      description: 'Shorter description used for Open Graph / Twitter cards.',
      group: 'seo',
    }),
    defineField({
      name: 'schemaDescription',
      title: 'Structured-data description',
      type: 'text',
      rows: 2,
      description: 'Business description used in the LocalBusiness structured data.',
      group: 'seo',
    }),
    defineField({
      name: 'seoServiceTypes',
      title: 'Structured-data service types',
      type: 'array',
      of: [{type: 'string'}],
      description: 'The "serviceType" entries in LocalBusiness structured data. SEO only — not shown on the page.',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
