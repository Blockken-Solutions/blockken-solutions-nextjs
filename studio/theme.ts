import {buildTheme, type ThemeConfig} from '@sanity/ui/theme'

const brand = '#18181b'
const brandInverted = '#fafafa'

const themeConfig: ThemeConfig = {
  color: {
    base: {
      primary: {
        _hue: 'gray',
      },
      '*': {
        focusRing: ['gray/900', 'gray/400'],
        link: {
          fg: ['gray/900', 'gray/300'],
        },
      },
    },
    button: {
      default: {
        primary: {
          enabled: {
            bg: ['gray/900', 'gray/200'],
            fg: ['white', 'gray/900'],
          },
          hovered: {
            bg: ['gray/950', 'gray/300'],
          },
          pressed: {
            bg: ['black', 'gray/400'],
          },
        },
      },
    },
    selectable: {
      default: {
        selected: {
          _hue: 'gray',
        },
      },
    },
  },
}

export const brandTheme = buildTheme(themeConfig)

export {brand, brandInverted}
