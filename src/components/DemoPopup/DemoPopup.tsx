import { useState } from "react"
import PopupPortal from "../Portal/PopupPortal/PopupPortal"
import styles from "./DemoPopup.module.css"
export default function DemoPopup() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <main className={styles["main"]}>
        <button className={styles["button"]} onClick={() => setIsOpen(true)}>
          Открыть popup
        </button>
      </main>
      <PopupPortal isOpen={isOpen}>
        <div className={styles["background"]}>
          <div className={styles["card"]}>
            <h1 className={styles["card__head"]}>DemoPopup</h1>
            <p>
              Для закрытия внутрь PopupPortal прокидывается состояние isOpen, а
              логика закрывающая popup реализуется внутри дочерних элементов
            </p>
            <button
              className={styles["button"]}
              onClick={() => setIsOpen(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      </PopupPortal>
    </>
  )
}
