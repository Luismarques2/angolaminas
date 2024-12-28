"use client"
export enum Themes {
  light, dark
}
export default function themChange(dark?:boolean){
  
  const root = document.documentElement
  
  saveTheme(dark)

  const colormain = isLight()  ? "#f0f0f0" : "#030c12"
  const colortext =isLight() ? "#333" : "#ededed"
  const colortop = isLight() ? "#fff" : "#191c20"
  const colorline = isLight() ? "#888" : "#888"
  const colorline2 = isLight() ? "#ddd" : "#111"
  const colorsecondary = isLight() ? "#fff" : "#191c20"
  const colorfooter = isLight() ? "#F87208" : "#b95000"

  root.style.setProperty("--color-main", colormain)
  root.style.setProperty("--color-text", colortext)
  root.style.setProperty("--color-top", colortop)
  root.style.setProperty("--color-line-2", colorline2)
  root.style.setProperty("--color-line", colorline)
  root.style.setProperty("--color-secondary", colorsecondary)
  root.style.setProperty("--color-footer", colorfooter)


  
}

const isLight = function(){
  const actualtheme = localStorage.getItem("theme") as unknown as Themes
  console.log(actualtheme, " Tema actual")
  return actualtheme == Themes.light
}

const saveTheme = (dark?: boolean) => {
  localStorage.setItem("theme", String(dark ? Themes.dark : Themes.light))
}




// :root {
//   --color-main: #f0f0f0;
//   --color-text: #333;
//   --color-top: #fff;
//   --color-line: #888;
//   --color-line-2: #ddd;
//   --color-secondary: #fff;
//   --color-gradient: linear-gradient(92deg, #E41412 -7.79%, #FFF201 169.71%);
// }

/* @media (prefers-color-scheme: dark) {
  :root {
    --color-main: #030c12;
    --color-text: #ededed;
    --color-top: #191c20;
    --color-secondary: #191c20;
    --color-line-2: #111;
  }
} */