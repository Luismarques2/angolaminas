import {Titillium_Web, Oswald, Manrope, Merriweather} from "next/font/google"

export const menuHeader = Titillium_Web({
  variable: "--font-header-1",
  weight: "600",
  subsets: ["latin", "latin-ext"],
  preload: true
  
})

export const fontHeader = Oswald( {
  variable: "--font-header-2",
  subsets:  ["latin"],
  
})

export const fontHeader2 = Manrope( {
  variable: "--font-menu-header",
  subsets: ['latin']
})

export const body = Merriweather({
  variable: "--font-body",
  weight: '400',
  subsets: ['latin']
})