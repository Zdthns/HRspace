import React, { useState } from "react"
import styles from "./styles.module.css"
import { OverlayPopup } from "../../../../components/popup/overlay/OverlayPopap"
import { useAppDispatch } from "@/redux/hooks"
import { closePopup } from "../../redux/PopupModel/PopupModel"

const Callback = () => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const popupClose = () => {
    setIsOpen(false)
  }
  const closeByEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(closePopup())
    }
  }

  return (
    <div className={styles.wrapper}>
      <OverlayPopup
        isOpened={isOpen}
        onClose={isOpen ? undefined : popupClose}
      />
    </div>
  )
}

export default Callback
