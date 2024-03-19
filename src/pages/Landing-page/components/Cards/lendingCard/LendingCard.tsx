import React, { ReactElement } from "react"
import { useAppDispatch } from "@/redux/hooks"
import styles from "./styles.module.css"
import Button from "../../button/Button"
import { openPopup } from "../../../redux/PopupModel/PopupModel"

export type lendingCardTypes = {
  cardName: string
  captions: string | ReactElement
  buttonType: "add" | "search" | "callback"
  buttonText: string
  image: string
}

const Card = (lending: lendingCardTypes) => {
  const dispatch = useAppDispatch()
  const handleClickButton = () => {
    console.log("bum")
    dispatch(openPopup())
  }
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
        <Button
          onClick={handleClickButton}
          buttonType={lending.buttonType}
          buttonText={lending.buttonText}
        />
      </div>
    </div>
  )
}

export default Card
