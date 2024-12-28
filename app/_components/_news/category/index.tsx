import { fontHeader2 } from "@/app/_utils/_fonts"


export default function Category({
  number, title, description,
} : {
  number?:number, title:string, description?:string, 
}){

  return(
    <div className={`
      flex flex-row gap-8
    `}>
      <span className="text-[32px] font-[900]">{number}</span>
      <div className="flex flex-col gap-2">
        <h2 title={title} style={{
          ...fontHeader2.style,
          textTransform: "uppercase"}}>{title}</h2>
        <h3 className="text-[13px]">{description}</h3>
      </div>
    </div>
  )
}