"use client"
import ButtonToggle from "@/app/_components/button-toggle";
import themChange, { Themes } from "@/app/_helpers/themeChange";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  
  
  const [active, setActive] = useState(false)
  let seted = false
  useEffect(() => {
    if(!seted){
      setActive((localStorage.getItem("theme") as unknown as Themes) == Themes.dark)
      seted = true
    }
    themChange(active)
  }, [active])

  

  return(
    <ButtonToggle actived={active} onClick = {() => {
      
      setActive(!active)
      
    }}/>
  )
}

export default ThemeButton;