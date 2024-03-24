/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Header.module.css"
import logo from "@/public/logo.svg"
import logoTitle from "@public/logo-title.svg"
import bell from "@/public/bell.svg"
import classNames from "classnames"
import { Link, useLocation } from "react-router-dom"

const links = [
  { name: "Главная", href: "/", current: true },
  { name: "Мои заявки", href: "/application" },
  { name: "Поиск по рынку", href: "hh.ru/resumesearch" },
  { name: "Счёт", href: "https://youtu.be/p8z6UeHYQrA?si=IcLzO6aUiC28eWUu" },
  { name: "Помощь", href: "https://feedback.hh.ru/" },
]

export function Header() {
  // Получаем текущий путь из хука useLocation
  const location = useLocation()

  return (
    <header className={styles["header"]}>
      <button className={styles["logo-container"]}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <img
          className={styles["logo-title"]}
          src={logoTitle}
          alt="Название Логотипа"
        />
      </button>
      <nav className={styles["navigation"]}>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index} className={styles["list-item"]}>
              <Link
                className={classNames(styles.link, {
                  [styles["link-current"]]: location.pathname === link.href,
                })}
                to={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles["user-info"]}>
        <button className={styles["button-bell"]}>
          <img className={styles.bell} src={bell} alt="Иконка уведомления" />
        </button>
        <span className={styles["user-avatar"]}>ВК</span>
        <div className={styles["user-container"]}>
          <p className={styles["user-name"]}>Виталий Крымов</p>
          <p className={styles["user-id"]}>#45732</p>
        </div>
      </div>
    </header>
  )
}
