import styles from "./srtyles.module.css"
import Link from "next/link";


export default function MenuLink({
  text, to
} : {
  text: string,
  to: string
}){

  return(
    <Link href={to} className={styles.area}>
      {text}
      <div />
    </Link>
  )
}