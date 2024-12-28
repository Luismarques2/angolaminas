import Menu from "@/app/_icons/menu";

export default function ButtonMenu(){

  return(
    <button className="outline-none border-none bg-transparent hover:bg-black/15 cursor-pointer rounded-full w-fit h-fit p-[10px] text-[var(--color-text)]">
      <Menu color={'var(--color-text)'}/>
    </button>
  )
}