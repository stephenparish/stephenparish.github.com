import merge from 'deepmerge'
import defaultThemeColors from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors'

export default merge(defaultThemeColors, {
  useColorSchemeMediaQuery: true,
  text: '#1D202A',
  primary: '#587768',
  accent: '#397367',
  modes: {
    dark: {
      text: '#FFF',
      background: '#1D202A',
      primary: '#7EAA95',
      accent: '#42858C',
    },
  },
})

// Other colors worth using in this palette:
// #8abba3
// #397367
// #42858C
// #35393c
// #EDAE49 or #DCE2AA or #4B3B47 or #35524A or #A57548
// error #E4572E or #DD6E42
// light success #A0EEC0
// For light #DCDCDD
