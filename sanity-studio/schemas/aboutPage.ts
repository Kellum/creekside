import { defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'introTitle',
      title: 'Introduction Title',
      type: 'string',
    },
    {
      name: 'introContent',
      title: 'Introduction Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content about the RV park',
    },
    {
      name: 'sideImage',
      title: 'Side Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faqItem' }] }],
    },
  ],
})
