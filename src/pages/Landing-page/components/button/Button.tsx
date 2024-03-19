import { ButtonHTMLAttributes } from "react"
import styles from "./styles.module.css"
interface Coords {
  right: number
  top: number
}
interface PropsTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  extClassName?: string
  buttonType: "add" | "search" | "callback"
  buttonText: string
  onClick?: () => void
}
const Button = ({
  extClassName,
  buttonType,
  buttonText,
  ...props
}: PropsTypes) => {
  return (
    <button className={styles.button} name={buttonType} onClick={props.onClick}>
      {buttonText}
    </button>
  )
}

export default Button
