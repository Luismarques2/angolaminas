

export default function TitleShort({text, className}: {text?:string, className?:string}) {

  return(
    <span className={`
      font-[700]
      text-[16px]
      ${className}
      `}>{text}</span>
  )
}