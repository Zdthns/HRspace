import React, { ChangeEventHandler, ReactNode } from "react"
import styles from "./styles.module.css"
import { IoClose } from "react-icons/io5"

type propsType = {
  children: ReactNode
  onClose: () => void
}

const Popup = ({ children, onClose }: propsType) => {
  const hendleSubmit: React.FormEventHandler<HTMLFormElement> = evt => {
    evt.preventDefault()
    console.log(evt)
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = evt => {
    console.log(evt)
  }
  //const fieldset = () => {
  //  props.dataSet.dataSetInput.forEach(element => {
  //    return element
  //  })
  //}
  ////const fieldset1 =
  //console.log(props.dataSet)

  //const { values, handleChange, setValues } = useHookForm({ fieldset1: "" })

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.exitButton} onClick={onClose}>
          <IoClose />
        </button>
        <h1 className={styles.heading}></h1>
        {children}
        {/*<Form
          //onSubmit={hendleSubmit}
          //form={values}
          //onChange={handleChange}
          data={props.dataSet}
        />*/}
      </div>
    </div>
  )
}

export default Popup
