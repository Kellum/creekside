import { defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact & Directions Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'mapImage',
      title: 'Map/Aerial View Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
    },
    {
      name: 'directions',
      title: 'Directions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Direction Title', type: 'string', description: 'e.g., "From South Florida"' },
            { name: 'content', title: 'Directions Content', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'googleMapsEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Google Maps iframe embed URL',
    },
  ],
})
