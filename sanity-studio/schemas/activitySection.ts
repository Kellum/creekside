import { defineType } from 'sanity'

export default defineType({
  name: 'activitySection',
  title: 'Activity Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Activity Title',
      type: 'string',
      description: 'e.g., "Major Attractions", "Shopping", "Restaurants & Dining"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'right',
    },
    {
      name: 'highlights',
      title: 'Highlights/Examples',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Specific places or activities',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})
