import Photo from "@/app/_components/photo";
import NewsTextColumns from "@/app/_components/_news/news-text-columns"
import MainContainer from "@/app/_components/main-container"
import styles from "./styles.module.css"
import {home_photos} from "@/app/_tests/json"

export default function PhotoNews(){
  
 
  return(
    <MainContainer className="gap-[20px] border-b-[var(--color-line-2)] border-b-[1px] pb-[4px]">
      <Photo items={home_photos}/>
      <div className={`flex flex-col flex-[1] gap-[20px] ${styles.news}`}>
        {
          home_photos.filter( (e,i) => i < 3).map( (e,i) => 
          <NewsTextColumns 
            key={i}
            title={e.title}
            description={e.sub}
            label={e.label} 
            image={e.image}
            href={e.href}
            />
        )
        }
        
        
      </div>
    </MainContainer>
  )
}