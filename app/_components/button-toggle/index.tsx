"use client"
import { useState } from "react"
import styles from "./styles.module.css"

export default function ButtonToggle({
  actived, onClick
} : {actived?:boolean, onClick:()=> undefined}){
  const [active, setActive] = useState(actived)
  const [justActived, setJustActived] = useState(actived) //controla se pode chamar a animação de desactivado, isso se pelo menos uma vez já foi activado!
  const click = () => {
    onClick()
    setActive(!active)
    setJustActived(true)
  }
  return(
    <div className={"p-[3px] bg-[var(--color-line)] w-[48px] rounded-full h-fit cursor-pointer "+styles.area }
     onClick={click}>
      <div className={ `w-[16px] aspect-square rounded-full bg-[var(--color-text)] ${(actived) ? styles.active : 
      active ? styles.active :
        justActived ? styles.disable : ""}`}/>
    </div>
  )
}