import styles from "./ProgressBar.module.css"
export function ProgressBar({ value }: { value: number }) {
  const getWidth = (): string => {
    switch (value) {
      case 1:
        return "20%"
      case 2:
        return "40%"
      case 3:
        return "60%"
      case 4:
        return "80%"
      case 5:
        return "100%"
      default:
        return "0%"
    }
  }

  return (
    <>
      <div className={styles["progress-container"]}>
        <div
          className={styles["progress-bar"]}
          style={{
            width: getWidth(),
          }}
        ></div>
      </div>
      <p className={styles["progress"]}>{getWidth()}</p>
    </>
  )
}
