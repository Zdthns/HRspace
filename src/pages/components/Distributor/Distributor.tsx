import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useCallback } from "react"
import { closePopup } from "../../../redux/slices/PopupModel/PopupModel"
import type { TData } from "../../types/typesLending"
import Popup from "../popup/Popup"
import { OverlayPopup } from "../popup/overlay/OverlayPopap"
import styles from "./styles.module.css"

type propType = {
  data: TData
}
const Distributor = (props: propType) => {
  const dispatch = useAppDispatch()
  const { isPopupOpen } = useAppSelector(store => store.PopupModel)

  const popupClose = () => {
    dispatch(closePopup())
  }
  const closeByEsc = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closePopup())
    }
  }, [dispatch])
  
  useEffect(() => {
    document.addEventListener("keydown", closeByEsc)
    return () => {
      document.removeEventListener("keydown", closeByEsc)
    }
  }, [closeByEsc])

  return (
    <div className={styles.wrapper}>
      <OverlayPopup isOpened={isPopupOpen} onClose={popupClose}>
        <Popup dataSet={props.data} onClose={popupClose} />
      </OverlayPopup>
    </div>
  )
}

export default Distributor
