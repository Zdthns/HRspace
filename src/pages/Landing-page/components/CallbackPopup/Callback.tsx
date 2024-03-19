import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { OverlayPopup } from "../../../../components/popup/overlay/OverlayPopap"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closePopup } from "../../../../redux/slices/PopupModel/PopupModel"
import Popup from "@/components/popup/Popup"

const Callback = () => {
  const dispatch = useAppDispatch()
  const { isPopupOpen } = useAppSelector(store => store.PopupModel)

  const popupClose = () => {
    dispatch(closePopup())
    console.log(isPopupOpen)
  }
  const closeByEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closePopup())
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", closeByEsc)
    return () => {
      document.removeEventListener("keydown", closeByEsc)
    }
  }, [])
  const name = "Обратный звонок"
  return (
    <div className={styles.wrapper}>
      <OverlayPopup isOpened={isPopupOpen} onClose={popupClose}>
        <Popup heading={name} />
      </OverlayPopup>
    </div>
  )
}

export default Callback
