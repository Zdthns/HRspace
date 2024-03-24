import styles from "./FormLayout.module.css"
import clsx from "classnames"
import "./react-select.css"
type FormLayoutProps = {
  children: React.ReactNode
  layoutClass?: string
  withPhoto?: boolean
}

export function FormLayout({
  children,
  layoutClass,
  withPhoto = true,
}: FormLayoutProps) {
  return (
    <div
      className={clsx(
        styles["form-layout"],
        withPhoto && styles["form-layout__with-photo"],
      )}
    >
      {withPhoto && <div className={styles["form-layout__image"]} />}
      <div className={clsx(styles["form-layout__form"], layoutClass)}>
        {children}
      </div>
    </div>
  )
}
