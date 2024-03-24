import React, { ReactElement, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import styles from "./styles.module.css"
import Button from "../../button/Button"
import { openPopup } from "../../../../redux/slices/PopupModel/PopupModel"
import Distributor from "../../Distributor/Distributor"
import { setDataCall, setDataCallback, setDataSearch } from "../../props"
import SearchCity from "../../popupForm/searchCity/SearchCity"
import Callback from "../../popupForm/callback/callback"
import Contacts from "../../popupForm/contacts/Contacts"

export type lendingCardTypes = {
  cardName?: string
  captions?: string | ReactElement
  buttonType: "add" | "search" | "callback" | "call"
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
      return
    }
    if (data === "search") {
      return <SearchCity />
    }
    if (data === "callback") {
      return <Callback />
    }
    if (data === "call") {
      return <Contacts />
    }
    return <Contacts />
  }

  const calltest = () => {
    dispatch(openPopup("call"))
  }

  useEffect(() => {
    document.getElementById("call")?.addEventListener("click", calltest)
    return () => {
      document.getElementById("call")?.removeEventListener("click", calltest)
    }
  }, [])

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
      {isPopupOpen && <Distributor data={setData(isType)} />}
    </div>
  )
}

export default Card
