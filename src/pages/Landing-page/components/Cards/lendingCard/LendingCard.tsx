import React, { ReactElement } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import styles from "./styles.module.css"
import Button from "../../button/Button"
import { openPopup } from "../../../../../redux/slices/PopupModel/PopupModel"
import Callback from "../../CallbackPopup/Callback"
import { setDataCallback, setDataSearch } from "../../props"

export type lendingCardTypes = {
  cardName?: string
  captions?: string | ReactElement
  buttonType: "add" | "search" | "callback"
  buttonText: string
  image?: string
}

const Card = (lending: lendingCardTypes) => {
  const dispatch = useAppDispatch()
  const { isPopupOpen, isType } = useAppSelector(store => store.PopupModel)
  const handleClickButton = () => {
    dispatch(openPopup(lending.buttonType))
  }
  const setData = (data: string) => {
    if (data === "add") {
      return setDataSearch
    }
    if (data === "search") {
      return setDataSearch
    }
    if (data === "callback") {
      return setDataCallback
    }
    return setDataSearch
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
      {isPopupOpen && <Callback data={setData(isType)} />}
    </div>
  )
}

export default Card
