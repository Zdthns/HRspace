import React from "react"
import styles from "./styles.module.css"
import Button from "../../pages/Landing-page/components/button/Button"

const Popup = () => {
  return (
    <div>
      <h1 className={styles.header}></h1>
      <form className={styles.form}>
        <input placeholder="Ваше имя"></input>
        <input placeholder="+7(___)___*__*__" type="tel"></input>
        <Button buttonType="callback" buttonText="Заказать звонок" />
      </form>
    </div>
  )
}

export default Popup
