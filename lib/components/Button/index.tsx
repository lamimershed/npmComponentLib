import styles from './styles.module.css'

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props
  return <button className={` border-blue-600  border-[3px] bg-blue-400 rounded-xl text-white  ${styles.button} ${className} `} {...restProps} />
}