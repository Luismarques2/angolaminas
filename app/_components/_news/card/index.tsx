import Link from "next/link"


export default function Card({
  title, description, className, classNameTitle, image, to=""
} : {
  title:string, description?:string, className?:string, classNameTitle?:string, image?:string, to?:string
}){

  return(
    <div className={"flex flex-col w-full max-w-[291px] "+className}>
      <Link
        href={to}
        className={`w-full rounded-[8px] min-h-[167px] bg-orange-800 aspect-video`} style = {{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover"
      }}/>
      <Link href={to}>
        <h3 title={title} className={"font-[700] text-[12px] mt-[8px] mb-[8px] "+classNameTitle} 
          style={{
            textTransform: "uppercase"
          }}
        >{title}</h3>
        <span className={"text-[12px]"}>
            {description}
        </span>
      </Link>
    </div>
  )
}