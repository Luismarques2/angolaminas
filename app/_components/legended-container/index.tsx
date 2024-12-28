import React from "react"
import MainContainer from "@/app/_components/main-container"
import TitleShort from "../TitleShort"

export default function LegendedContainer({
  children, legend, className
} : { children: React.ReactNode, legend: string, className?:string}){

  return(
    <MainContainer className={`mt-[42px] pt-[20px] border-t-[1px] border-[var(--color-line-2)] relative ${className}`}>
      <TitleShort className={`
        absolute
        top-[-15px]
        bg-[var(--color-main)]
        pr-[25px]

        `} text={legend}/>
      {children}
    </MainContainer>
  )
}

