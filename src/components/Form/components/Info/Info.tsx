import styles from "./Info.module.css"

export function Info({
  children,
  style,
}: {
  children: string
  style?: React.CSSProperties
}) {
  return (
    <p style={style} className={styles["info"]}>
      {children}
    </p>
  )
}
