import { defineType } from 'sanity'

export default defineType({
  name: 'accommodationsPage',
  title: 'Accommodations Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'sections',
      title: 'Accommodation Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'array', of: [{ type: 'block' }] },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'features', title: 'Features List', type: 'array', of: [{ type: 'string' }] },
            { name: 'ctaText', title: 'CTA Button Text', type: 'string' },
            { name: 'ctaLink', title: 'CTA Link', type: 'string' },
          ],
        },
      ],
    },
  ],
})
