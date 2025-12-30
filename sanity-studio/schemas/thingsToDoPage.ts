import { defineType } from 'sanity'

export default defineType({
  name: 'thingsToDoPage',
  title: 'Things to Do Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
    },
    {
      name: 'nearbyAttractions',
      title: 'Nearby Attractions List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of nearby attractions',
    },
    {
      name: 'activitySections',
      title: 'Activity Sections',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'activitySection' }] }],
    },
  ],
})
