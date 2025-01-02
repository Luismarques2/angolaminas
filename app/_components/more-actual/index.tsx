import LegendedContainer from "@/app/_components/legended-container"
import Card from "../_news/card"
import styles from "./styles.module.css"
import Category from "../_news/category"
import TitleShort from "../TitleShort"
import { home_photos } from "@/app/_tests/json"
import VerticalPublicity from "../_publicity/vertical-publicity"
export default function MoreActual(){

  return(
    <LegendedContainer legend={"Mais actual"} className={"gap-14 wrap "+styles.area}>
      
      <div className={"card-area flex-[2] "+styles.card_area}>
        <LocalCard title="Fundos de abando já financiaram Estado em  890 milhões de USD" description={"lorem "}/>
        {home_photos.map( (e,i) => {
          return <LocalCard key = {i} title={e.title} description={e.sub} image={e.image} />
        })}
        <LocalCard title="Fundos de abando já financiaram Estado em  890 milhões de USD" description={"lorem "}/>
         {home_photos.map( (e,i) => {
          return <LocalCard key = {i} title={e.title} description={e.sub} image={e.image} />
        })}
       

         
      </div>
      
        <div className={styles.categories}>
        <div className={'flex flex-col flex-1 gap-[10px]'}>
          <TitleShort text="Notícias mais vistas"/>
          <div className={styles.categories_list}>

          {home_photos.map( (e,i) => {
            return <Category key = {i} title={e.title} description={e.sub} number={i+1} />
          })}
            {/* <Category title="categoria" number={1} description="Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante"/>
            <Category title="categoria" number={1} description="Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante"/>
            <Category title="categoria" number={1} description="Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante"/>
            <Category title="categoria" number={1} description="Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante, Esse é um tipo de categoria, muito interessante"/> */}
          
          </div>
          <VerticalPublicity />
        </div>
        
      </div>
    </LegendedContainer>
  )
}

const LocalCard = ({title, description, image}: {title:string, description:string, image?:string}) => {

  return(
    <Card title={title} description={description} className={"max-w-none w-none" } image={image}/>
  )
}   