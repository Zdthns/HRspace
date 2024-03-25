import styles from "./FormLayout.module.css"
import clsx from "classnames"
type FormLayoutProps = {
  children: React.ReactNode
  layoutClass?: string
  srcImage?: string
}

export function FormLayout({
  children,
  layoutClass,
  srcImage,
}: FormLayoutProps) {
  return (
    <div
      className={clsx(
        styles["form-layout"],
        srcImage && styles["form-layout__with-photo"],
      )}
    >
      {srcImage && (
        <img
          src={srcImage}
          alt="кОртинка"
          className={styles["form-layout__image"]}
        />
      )}
      <div className={clsx(styles["form-layout__form"], layoutClass)}>
        {children}
      </div>
    </div>
  )
}
