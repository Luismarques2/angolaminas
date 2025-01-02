import { fontHeader } from "@/app/_utils/_fonts";
import { CSSProperties } from "react";


export default function Title({text, className}:{text?:string, className?:string, style?: CSSProperties}) {

  return(
    <h1 className={`text-[24px] font-[600] text-white uppercase ${className} ${fontHeader.className}`}  >
      {text}
    </h1>
  )
}