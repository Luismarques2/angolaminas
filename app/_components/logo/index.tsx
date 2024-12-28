import styles from "./styles.module.css"
import Link from "next/link"
import {APP_ROUTES} from "@/app/_constants/app-routes"

export default function Logo(){

  return(
    <Link  className={styles.area} href={APP_ROUTES.public.home.home}>
      <span>Angola</span>
      <span>Minas</span>
    </Link>
  )
}