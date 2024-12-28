"use client"
import ButtonToggle from "@/app/_components/button-toggle";
import themChange, { Themes } from "@/app/_helpers/themeChange";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  
  const actualtheme = localStorage.getItem("theme") as unknown as Themes
  const [active, setActive] = useState(actualtheme == Themes.dark)
  useEffect(() => {
    themChange(active)
  }, [active])

  

  return(
    <ButtonToggle actived={active} onClick = {() => {
      
      setActive(!active)
      
    }}/>
  )
}

export default ThemeButton;