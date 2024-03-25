import React, { ChangeEventHandler, ReactNode } from "react"
import styles from "./styles.module.css"
import { IoClose } from "react-icons/io5"

type propsType = {
  children: ReactNode
  onClose: () => void
}

const Popup = ({ children, onClose }: propsType) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.exitButton} onClick={onClose}>
        <IoClose />
      </button>
      {children}
    </div>
  )
}

export default Popup
