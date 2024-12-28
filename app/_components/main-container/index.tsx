import React from "react";

export default function MainContainer({children, className} : {children: React.ReactNode, className?: string}){

  return(
    <div className={"w-full flex "}>
      <div className={`w-full max-w-[1200px] m-auto flex flex-row ${className} flex-[1]`} >
        {children}
      </div>
    </div>
  )
}