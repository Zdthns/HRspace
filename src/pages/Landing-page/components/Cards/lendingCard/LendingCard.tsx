import React, { ReactElement } from "react"
import styles from "./styles.module.css"
import Button from "../../button/Button"

export type lendingCardTypes = {
  cardName: string
  captions: string | ReactElement
  buttonText: string
  image: string
}

const Card = (lending: lendingCardTypes) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{lending.cardName}</h2>
      <div className={styles.image_wrapper}>
        <img
          className={styles.image}
          src={lending.image}
          alt="альтернативный текст"
        />
      </div>
      <p className={styles.caption}>{lending.captions}</p>
      <div className={styles.button}>
        {" "}
        <Button text={lending.buttonText} />
      </div>
    </div>
  )
}

export default Card
