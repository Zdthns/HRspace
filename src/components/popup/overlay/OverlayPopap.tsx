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
      <div className={classNames(styles.popup)} role="dialog" id="label">
        <div
          className={classNames(styles.overlay, extClassName)}
          role="button"
          tabIndex={0}
          onClick={onClose}
          aria-labelledby="label"
        ></div>
        {children}
      </div>
    </Portal>
  )
}
