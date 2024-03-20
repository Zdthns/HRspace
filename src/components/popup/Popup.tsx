import React, { ReactNode } from "react"
import styles from "./styles.module.css"
import Button from "../../pages/Landing-page/components/button/Button"
import {
  TData,
  TdataSetButton,
  TdataSetInput,
} from "@/pages/Landing-page/components/props"

type propsType = {
  dataSet: TData
}

const Popup = (dataSet: propsType) => {
  const { dataSetInput, dataSetButton, heading, buttonText } = dataSet.dataSet

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>{}</div>
      <div className={styles.container}>
        <form>
          {dataSetInput?.map((item: TdataSetInput) => (
            <>
              <label>{item.label}</label>
              <input
                className={styles.input}
                placeholder={item.placeholder}
                type={item.type}
              />
            </>
          ))}
          {dataSetButton?.map((item: TdataSetButton) => (
            <Button
              extClassName={styles.button}
              buttonType={item.buttonType}
              buttonText={item.buttonText}
            />
          ))}
        </form>
      </div>
    </div>
  )
}

export default Popup
