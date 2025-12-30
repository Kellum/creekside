import { defineType } from 'sanity'

export default defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tier Name',
      type: 'string',
      description: 'e.g., "Daily Rate", "Weekly Rate", "Monthly Rate"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "$60", "$275", "$750"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'priceSubtext',
      title: 'Price Subtext',
      type: 'string',
      description: 'e.g., "per night", "per week", "per month"',
    },
    {
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in this tier',
    },
    {
      name: 'highlighted',
      title: 'Highlight this tier?',
      type: 'boolean',
      description: 'Most popular option',
      initialValue: false,
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
      subtitle: 'price',
    },
  },
})
