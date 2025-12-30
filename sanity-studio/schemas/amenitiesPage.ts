import { defineType } from 'sanity'

export default defineType({
  name: 'amenitiesPage',
  title: 'Amenities Page',
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
      name: 'sectionTitle',
      title: 'Amenities Section Title',
      type: 'string',
      description: 'e.g., "Everything You Need to Enjoy Your Stay"',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'amenities',
      title: 'Amenities List',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'amenityItem' }] }],
    },
  ],
})
