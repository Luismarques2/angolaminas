import { home_photos } from "@/app/_tests/json";
import Card from "../_news/card";
import LegendedContainer from "../legended-container";
import styles from "./styles.module.css"

export default function MoreViews(){

  return(
    <LegendedContainer legend="Destaque" className={styles.area}>
      {home_photos.map(
        (e,i) => {
          return <LocalCard key={i} title={e.title} description={e.sub} image={e.image} href={e.href} />
        })}
      
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      {home_photos.map(
        (e,i) => {
          return <LocalCard key={i} title={e.title} description={e.sub} image={e.image} href={e.href}/>
        })}
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>
      <LocalCard title="Novembro de 2024, o Rio de Janeiro será palco do World Forum of Favelas." description="ativistas e líderes de comunidades de várias partes do mundo para discutir o futuro das favelas e a inclusão social."/>

    </LegendedContainer>
  )
}

const LocalCard = ({
  title, description, image, href
} : {title:string, description?:string, image?:string, href?:string}) =>{

  return(
    <Card title={title} description={description} classNameTitle={"text-[16px]"} image={image} to={href}/>
  )
}