import type { IPrice } from './types'

export const cardFreeData = {
  prices: [{ sum: 0, discount: null }] satisfies [IPrice],
  features: [
    'Management dashboard',
    'Up to 2 agency members',
    'Manual import of influencers',
    'Youtube and Twitch analytics',
    'Basic public agency profile',
  ],
}

export const cardPremiumData = {
  title: 'Premium',
  description: 'Billed yearly',

  prices: [
    { sum: 12, discount: 0 },
    { sum: 8, discount: -0.2 },
  ] satisfies [IPrice, IPrice],

  features: [
    'All free plan features and . . .',
    'Unlimited agency members',
    'Advanced public agency profile',
    'Advanced brand Inquiries',
    'Verify data and premium badges',
    'Display in public agency listing',
    'Unlimited data storage',
    'Import & Export data',
    'Manual update of influencer profiles',
  ],
}
