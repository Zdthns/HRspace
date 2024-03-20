import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { OverlayPopup } from "../../../../components/popup/overlay/OverlayPopap"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closePopup } from "../../../../redux/slices/PopupModel/PopupModel"
import Popup from "@/components/popup/Popup"
import { lendingCardTypes } from "../Cards/lendingCard/LendingCard"
import { TData, setDataCall, setDataCallback, setDataSearch } from "../props"

type propType = {
  data: TData
}
const Callback = (props: propType) => {
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

  //***********

  return (
    <div className={styles.wrapper}>
      <OverlayPopup isOpened={isPopupOpen} onClose={popupClose}>
        <Popup dataSet={props.data} />
      </OverlayPopup>
    </div>
  )
}

export default Callback
