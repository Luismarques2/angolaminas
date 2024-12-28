import { fontHeader2 } from "@/app/_utils/_fonts"
import styles from "./styles.module.css"
import Link from "next/link"

export default function NewsTextColumns({
  title, description, label, image, href=""
} : {
  title:string, description?:string, label?:string, image?:string, href?:string
}){


  return(
    <div className={`flex flex-row gap-[10px] pb-[10px] w-full max-w-[600px] h-fit justify-between ${styles.area} `}>
      <Link href={href}>
      <div className="flex flex-col gap-[5px]">
        <h2 className= {`text-[16px] text-yellow-800 font-[900]`} style={{
          ...fontHeader2.style,
          textTransform: "uppercase"
          }}>{title}</h2>
        <h3 className="text-[13px]">{description}</h3>
        <h4 className="opacity-50 text-[12px] mt-[-4px]">{label}</h4>
      </div>
      </Link>
      <Link href={href}>
      <div className={`rounded-[8px] min-w-[185px] h-[127px] bg-black/70`} 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          cursor: "pointer"
        }}
      />
      </Link>
    </div>
  )
}