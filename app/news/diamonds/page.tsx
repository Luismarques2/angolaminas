
import Card from "@/app/_components/_news/card";
import LegendedContainer from "@/app/_components/legended-container";
import styles from "../styles.module.css"
import { home_photos } from "@/app/_tests/json";
import { APP_ROUTES } from "@/app/_constants/app-routes";

export default function News(){


  return(
    <LegendedContainer legend={APP_ROUTES.public.diamonds.name} className={styles.area}>
      {home_photos.map((e,i)=> {
        return <Card title={e.title} description={e.sub} key={i} to={e.href} image={e.image} classNameTitle={"text-[16px]"}/>
      })}
      {home_photos.map((e,i)=> {
        return <Card title={e.title} description={e.sub} key={i} to={e.href} image={e.image} classNameTitle={"text-[16px]"}/>
      })}
    </LegendedContainer>
  )
}