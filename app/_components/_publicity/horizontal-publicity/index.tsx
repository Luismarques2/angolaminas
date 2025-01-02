import MainContainer from "../../main-container";
import Title from "../../title";

export default function HorizontalPublicity(){
  
  return(
    <MainContainer className="my-[36px]">
      <div className="cursor-pointer w-full min-h-[250px]  rounded-[10px] flex p-[36px]"
      style={{
        backgroundImage: "var(--color-gradient)"
      }}
      >
        <div className={"flex flex-1 justify-center items-center border-dashed border-[5px] border-white"}>
           <Title className="text-[60px] text-white " text="PUBLICITE AQUI A TUA MARCA !" />
        </div>
      </div>
    </MainContainer>
  )
}