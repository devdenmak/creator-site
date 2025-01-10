export interface SpritesMap {
  filled:
    | 'analytics'
    | 'api'
    | 'arrow-top'
    | 'cart'
    | 'dashboard-square'
    | 'inquires'
    | 'lock'
    | 'nut'
    | 'rocket'
    | 'suite'
    | 'toggler'
    | 'user'
    | 'zipper'
  outlined: 'check' | 'info'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  filled: {
    filePath: 'filled.9ae2d7df.svg',
    items: {
      analytics: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      api: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      'arrow-top': {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      cart: {
        viewBox: '0 0 18 19',
        width: 18,
        height: 19,
      },
      'dashboard-square': {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20,
      },
      inquires: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      lock: {
        viewBox: '0 0 18 22',
        width: 18,
        height: 22,
      },
      nut: {
        viewBox: '0 0 18 17',
        width: 18,
        height: 17,
      },
      rocket: {
        viewBox: '0 0 21 21',
        width: 21,
        height: 21,
      },
      suite: {
        viewBox: '0 0 18 18',
        width: 18,
        height: 18,
      },
      toggler: {
        viewBox: '0 0 18 12',
        width: 18,
        height: 12,
      },
      user: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20,
      },
      zipper: {
        viewBox: '0 0 15 20',
        width: 15,
        height: 20,
      },
    },
  },
  outlined: {
    filePath: 'outlined.80d5843e.svg',
    items: {
      check: {
        viewBox: '0 0 13 10',
        width: 13,
        height: 10,
      },
      info: {
        viewBox: '0 0 16 16',
        width: 16,
        height: 16,
      },
    },
  },
}
