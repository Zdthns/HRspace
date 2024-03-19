import React, { ReactNode } from "react"
import styles from "./styles.module.css"
import Button from "../../pages/Landing-page/components/button/Button"

type propsType = {
  heading: string
}

const Popup = (props: propsType) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{props.heading}</div>
      <div className={styles.container}>
        <form>
          <input className={styles.input} placeholder="Ваше имя"></input>
          <input
            className={styles.input}
            placeholder="+7(___)___*__*__"
            type="tel"
          ></input>
          <Button
            extClassName={styles.button}
            buttonType="callback"
            buttonText="Заказать звонок"
          />
        </form>
      </div>
    </div>
  )
}

export default Popup
