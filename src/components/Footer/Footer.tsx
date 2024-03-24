import styles from "./Footer.module.css"
import logoBlack from "@public/logo-black.svg"
import logoTitle from "@public/logo-title.svg"
import vkIcon from "@public/vk-icon.svg"
import telegramIcon from "@public/telegram-icon.svg"
import okIcon from "@public/ok-icon.svg"

export function Footer() {
  return (
    <footer className={styles.footer}>
 <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.region}>Москва и область</span>
          <a href="tel:+74959746427" className={styles.number}>+7 495 974-64-27</a>
        </li>
        <li className={styles.item}>
          <span className={styles.region}>Санкт-Петербург и область</span>
          <a href="tel:+78124584545" className={styles.number}>+7 812 458-45-45</a>
        </li>
        <li className={styles.item}>
          <span className={styles.region}>Регионы</span>
          <a href="tel:88001006427" className={styles.number}>8 800 100-64-27</a>
        </li>
        <li className={styles.item}>
          <span className={styles.region}>hrspace@hh.ru</span>
        </li>
      </ul>
      <div className={styles["company-info"]}>
        <button className={styles["logo-container"]}>
          <img className={styles.logo} src={logoBlack} alt="Логотип" />
          <img className={styles["logo-title"]} src={logoTitle} alt="Логотип" />
        </button>
        <p className={styles.company}>&copy; 2024 Группа компаний HeadHunter</p>
        <ul className={styles.networks}>
          <li>
            <img className={styles.icon} src={vkIcon} alt="Телеграм" />
          </li>
          <li>
            <img className={styles.icon} src={telegramIcon} alt="ВК" />
          </li>
          <li>
            <img className={styles.icon} src={okIcon} alt="Одноклассники" />
          </li>
        </ul>
      </div>
    </footer>
  )
}
