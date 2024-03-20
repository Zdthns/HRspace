import classNames from "classnames"
import React, { ReactNode } from "react"
import styles from "./styles.module.css"
import { Portal } from "../../portal"

interface OverlayingPopupProps {
  children?: ReactNode
  isOpened?: boolean
  onClose?: () => void
  extClassName?: string
}

export const OverlayPopup = ({
  children,
  onClose,
  isOpened,
  extClassName,
}: OverlayingPopupProps) => {
  if (!isOpened) {
    return null
  }

  return (
    <Portal isOpened>
      <div className={classNames(styles.popup)}>
        <div
          className={classNames(styles.overlay, extClassName)}
          onClick={onClose}
        ></div>
        {children}
      </div>
    </Portal>
  )
}
