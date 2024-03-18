import React from "react"
import styles from "./styles.module.css"
type PropsTypes = {
  text: string
}
const Button = (props: PropsTypes) => {
  return <button className={styles.button}>{props.text}</button>
}

export default Button
