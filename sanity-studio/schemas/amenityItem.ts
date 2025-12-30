import { defineType } from 'sanity'

export default defineType({
  name: 'amenityItem',
  title: 'Amenity Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Amenity Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional icon or image for the amenity',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Essential', value: 'essential' },
          { title: 'Recreational', value: 'recreational' },
          { title: 'Facilities', value: 'facilities' },
          { title: 'Services', value: 'services' },
        ],
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})
