import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.googleFonts = [
  {
    name: "Montserrat",
    styles: ["700"],
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
  {
    name: "Cairo",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
]
Wordpress2016.headerFontFamily = ["Cairo", "Georgia", "serif"]
Wordpress2016.bodyFontFamily = ["Cairo", "Georgia", "serif"]
Wordpress2016.baseFontSize = "24px"
Wordpress2016.headerWeight = 700

// Wordpress2016.overrideStyles = options => ({
//   h2: {
//     fontWeight: 700,
//   },
// })
Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

console.log(Wordpress2016.overrideStyles)

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
