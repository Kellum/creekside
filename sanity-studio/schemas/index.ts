import siteSettings from './siteSettings'
import homePage from './homePage'
import aboutPage from './aboutPage'
import accommodationsPage from './accommodationsPage'
import amenitiesPage from './amenitiesPage'
import thingsToDoPage from './thingsToDoPage'
import ratesPage from './ratesPage'
import contactPage from './contactPage'
import faqItem from './faqItem'
import amenityItem from './amenityItem'
import pricingTier from './pricingTier'
import activitySection from './activitySection'

export const schemaTypes = [
  // Site-wide settings
  siteSettings,

  // Pages
  homePage,
  aboutPage,
  accommodationsPage,
  amenitiesPage,
  thingsToDoPage,
  ratesPage,
  contactPage,

  // Content types
  faqItem,
  amenityItem,
  pricingTier,
  activitySection,
]
