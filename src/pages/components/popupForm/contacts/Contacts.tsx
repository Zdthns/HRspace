import React from "react"
import styles from "./styles.module.css"
const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>Для Москвы и области</h3>
      <div className={styles.input}>8 495 974-64-27</div>
      <h3 className={styles.heading}>Для Санкт-Петербурга и области</h3>
      <div className={styles.input}>8 812 458-45-45</div>
      <h3 className={styles.heading}>Для регионов</h3>
      <div className={styles.input}>8 800 100-64-27</div>
    </div>
  )
}

export default Contacts
