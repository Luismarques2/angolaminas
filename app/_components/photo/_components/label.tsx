


export default function Label({
  text
} : {
  text?: string
}){

  return(
    <div className={`
      w-fit font-[700 ] min-w-[91px] px-[11px] py-[4px] bg-orange text-white bg-orange-600 text-[12px]
    `}>
      {text}
    </div>
  )
}