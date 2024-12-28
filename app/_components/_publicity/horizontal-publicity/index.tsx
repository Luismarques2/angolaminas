import MainContainer from "../../main-container";
import Title from "../../title";

export default function HorizontalPublicity(){
  
  return(
    <MainContainer className="my-[36px]">
      <div className="cursor-pointer w-full min-h-[250px]  rounded-[10px] flex justify-center items-center p-[42px]"
      style={{
        backgroundImage: "var(--color-gradient)"
      }}
      >
        <Title className="text-[60px] text-white " text="PUBLICITE AQUI A TUA MARCA !" />
      </div>
    </MainContainer>
  )
}