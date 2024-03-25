import classNames from "classnames"
import type { ReactNode } from "react"
import React from "react"
import styles from "./styles.module.css"
import { Portal } from "../../../components/portal"

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
}: OverlayingPopupProps) => {
  if (!isOpened) {
    return null
  }

  return (
    <Portal isOpened>
      <div className={styles.popup}>
        {/*<div className={styles.overlay} onClick={onClose}/>*/}
        {children}
      </div>
    </Portal>
  )
}
