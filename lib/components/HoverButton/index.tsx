// import 'tailwindcss/tailwind.css'
// import 'index.css'


export function HoverButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props
  return <button className={` border-red-400  border-[3px] bg-black rounded-xl text-white  ${className} `} {...restProps} />
}