import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { OverlayPopup } from "../popup/overlay/OverlayPopap"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closePopup } from "../../../redux/slices/PopupModel/PopupModel"
import Popup from "../popup/Popup"
import { TData } from "../../types/typesLending"

type propType = {
  data: TData
}
const Distributor = (props: propType) => {
  const dispatch = useAppDispatch()
  const { isPopupOpen } = useAppSelector(store => store.PopupModel)

  const popupClose = () => {
    dispatch(closePopup())
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

  return (
    <div className={styles.wrapper}>
      <OverlayPopup isOpened={isPopupOpen} onClose={popupClose}>
        <Popup dataSet={props.data} onClose={popupClose} />
      </OverlayPopup>
    </div>
  )
}

export default Distributor
