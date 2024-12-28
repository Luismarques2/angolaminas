import {Titillium_Web, Oswald, Manrope, Merriweather} from "next/font/google"

export const fontHeader = Titillium_Web({
  variable: "--font-header-1",
  weight: "600",
  subsets: ["latin"]
})

export const fontHeader2 = Oswald( {
  variable: "--font-header-2",
  subsets:  ["latin"]
})

export const menuHeader = Manrope( {
  variable: "--font-menu-header",
  subsets: ['latin']
})

export const body = Merriweather({
  variable: "--font-body",
  weight: '400',
  subsets: ['latin']
})