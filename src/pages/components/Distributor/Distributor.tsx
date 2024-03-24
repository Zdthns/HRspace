import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useCallback, ReactNode } from "react"
import { closePopup } from "../../../redux/slices/PopupModel/PopupModel"
import Popup from "../popup/Popup"
import { OverlayPopup } from "../popup/overlay/OverlayPopap"
import styles from "./styles.module.css"

type propType = {
  data: ReactNode
}
const Distributor = (props: propType) => {
  const dispatch = useAppDispatch()
  const { isPopupOpen } = useAppSelector(store => store.PopupModel)

  const popupClose = () => {
    dispatch(closePopup())
  }
  const closeByEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch(closePopup())
      }
    },
    [dispatch],
  )

  useEffect(() => {
    document.addEventListener("keydown", closeByEsc)
    return () => {
      document.removeEventListener("keydown", closeByEsc)
    }
  }, [closeByEsc])

  return (
    <div className={styles.wrapper}>
      <OverlayPopup isOpened={isPopupOpen} onClose={popupClose}>
        <Popup onClose={popupClose} children={props.data} />
      </OverlayPopup>
    </div>
  )
}

export default Distributor
