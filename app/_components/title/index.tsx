import { fontHeader } from "@/app/_utils/_fonts";


export default function Title({text, className, style}:{text?:string, className?:string, style?: CssStyleAttribute}) {

  return(
    <h1 className={`text-[24px] font-[600] text-white ${className}`} style={fontHeader.style} style={style}>
      {text}
    </h1>
  )
}