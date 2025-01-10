import { AnyIconName } from '@/app/_shared/icons'

// There can only be 4 here. If you need to add more or fewer, adjust the layout accordingly.

export const BENEFITS = [
  {
    icon: 'filled/cart' satisfies AnyIconName,
    title: 'Marketplace',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: 'filled/suite' satisfies AnyIconName,
    title: 'Brand suite',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: 'filled/user' satisfies AnyIconName,
    title: 'Influencer profiles',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    icon: 'filled/nut' satisfies AnyIconName,
    title: 'Campaign management',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
] as const
