
import PhotoNews from "./_components/photo-news";
import MoreActual from "../_components/more-actual"
import MoreViews from "../_components/more-view";
import HorizontalPublicity from "../_components/_publicity/horizontal-publicity";
export default function Home(){

  return(
    <div>
      <PhotoNews />
      <MoreActual />
      <HorizontalPublicity />
      <MoreViews />
    </div>
  )
}