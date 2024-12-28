import MainContainer from "@/app/_components/main-container";
import Photo from "@/app/_components/photo";
import { home_photos } from "@/app/_tests/json";
import Title from "@/app/_components/title"
import MoreViews from "@/app/_components/more-view";

export default function View({params : {id}} : { params : { id: number}}){
  const item = [home_photos[id]]
  return(
    <MainContainer className={"flex flex-col gap-[36px]"}>
      <Photo items={item} className={" max-w-full h-[500px]"} nolink/>
      <div className={"w-full flex flex-col gap-[22px]"}>
        <Title text = {item[0].title} style={{
          color: "orange"
        }}/>
        <span>
          {item[0].sub}
        </span>
      </div>
      <MoreViews />
    </MainContainer>
  )
}