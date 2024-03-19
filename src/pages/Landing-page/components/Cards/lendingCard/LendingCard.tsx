import React, { ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import styles from "./styles.module.css"
import Button from "../../button/Button"
import { openPopup } from "../../../../../redux/slices/PopupModel/PopupModel"
import Callback from "../../CallbackPopup/Callback"
import { createLogger } from "vite"

export type lendingCardTypes = {
  cardName: string
  captions: string | ReactElement
  buttonType: "add" | "search" | "callback"
  buttonText: string
  image: string
}

const Card = (lending: lendingCardTypes) => {
  const dispatch = useAppDispatch()
  const { isPopupOpen } = useAppSelector(store => store.PopupModel)
  const handleClickButton = () => {
    dispatch(openPopup())
    console.log(isPopupOpen)
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
      {isPopupOpen && <Callback />}
    </div>
  )
}

export default Card
