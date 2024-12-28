/***Verifcar a necessidade desse componente ser client side */
"use client"

import Label from "./_components/label"
import Title from "@/app/_components/title"
import styles from "./styles.module.css"
import {useRef, useEffect} from "react"
import Link from "next/link"

export interface ItemPhoto {
  image: string,
  label?: string
  title: string,
  sub?: string,
  href?:string,

}
export interface IPhoto {
  items: ItemPhoto[],
  className?: string,
  nolink?:boolean
}
export default function Photo({items, className, nolink}: IPhoto){
  let mouseover = (false)
  const doScroll = () => {
    let iterations = 1;
    setInterval(()=> {
      console.log(mouseover)
      if(mouseover) return
      if(!ref) return
      const element =( ref.current as unknown ) as HTMLDivElement
      const style = getComputedStyle(element as Element)
      const width = +style.width.replace("px","")
      if(iterations == 0)
        element.style.scrollBehavior = "initial"
      else
        element.style.scrollBehavior = "smooth"
      element.scrollTo(width*iterations, 0)
      if(iterations == items.length){
        iterations = 0
      }else
        iterations++
    }, 2000)
  }

  const ref = useRef(null)
  useEffect(() => {
    doScroll()
   }, [])
  return(

    <div className={" w-full max-w-[620px] h-[422px] cursor-pointer "+className+ " " +styles.area} ref={ref} 
        
        onMouseMove={() =>{  
            mouseover = true
            console.log("dentro ", mouseover)
        }}
        onMouseLeave={() =>{
          mouseover = (false)
          console.log("fora ", mouseover)
        }}
        onMouseUp={() =>  mouseover = (false)}
    >
      {items.map( (e, i) => <PhotoItem 
      key={i} 
      label={e.label} 
      title={e.title} 
      sub={e.sub} 
      photo={e.image} 
      href={nolink ? "" : e.href}/> )}
    </div>
    
  )
}

const PhotoItem = ({
  label, title, sub, photo, href=""
} : {label?:string, title:string, sub?:string, photo?:string, href?:string}) => {

  return( 
    <Link href={href} className={`h-full bg-black/90 flex items-end px-[50px] py-[30px] ${styles.photo}`}
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "no-repeat"
      }}
      
      >
      <Description label={label} title={title} sub={sub} />
  </Link>
  )
}



const Description = ({
  label, title, sub
} : {
  label?:string,  title: string, sub?:string
}) => {

  return(
    <div style={{
      zIndex: 1,
      maxWidth: '590px'
    }}>
        <Label text={label}/>
        <div className="text-white">
          <Title text={title} className="text-upper" style={{
            textTransform: "uppercase"
          }}/>
          <h3 className="font-500 text-[14px]">
            {sub}
          </h3>
        </div>
       
      </div>
  )
}