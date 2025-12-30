import { defineType } from 'sanity'

export default defineType({
  name: 'ratesPage',
  title: 'Rates Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'pricingTiers',
      title: 'Pricing Tiers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pricingTier' }] }],
    },
    {
      name: 'policiesTitle',
      title: 'Policies Section Title',
      type: 'string',
    },
    {
      name: 'policies',
      title: 'Policies & Cancellations',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'rulesTitle',
      title: 'Rules Section Title',
      type: 'string',
    },
    {
      name: 'rules',
      title: 'RV Park Rules & Regulations',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
})
