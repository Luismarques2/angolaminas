import Title from "../../title";


export default function VerticalPublicity(){

  return(
    <div className="flex  flex-1 p-[10px]" style={{
      backgroundImage: "var(--color-gradient)"
    }}>
       <div className={"flex flex-1 justify-center items-center border-dashed border-[5px] border-white"}>
         <Title text="Publicite Aqui !" />
      </div>
    </div>
  )
}