import type { ChangeEventHandler} from "react";
import type React from "react";
import { ReactNode } from "react"
import styles from "./styles.module.css"
import Button from "../button/Button"
import type { TData} from "../../types/typesLending";
import { TdataSetButton, TdataSetInput } from "../../types/typesLending"
import Form from "../Form/Form"
import { useHookForm } from "../Form/hook/useForm"
import { IoClose } from "react-icons/io5"

type propsType = {
  dataSet: TData
  onClose: () => void
}

const Popup = (props: propsType) => {
  const hendleSubmit: React.FormEventHandler<HTMLFormElement> = evt => {
    evt.preventDefault()
    console.log(evt)
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = evt => {
    console.log(evt)
  }
  const fieldset = () => {
    props.dataSet.dataSetInput.forEach(element => {
      return element
    })
  }
  //const fieldset1 =
  console.log(props.dataSet)

  const { values, handleChange, setValues } = useHookForm({ fieldset1: "" })

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.exitButton} onClick={props.onClose}>
          <IoClose />
        </button>
        <h1 className={styles.heading}>{props.dataSet.heading}</h1>
        <Form
          onSubmit={hendleSubmit}
          form={values}
          onChange={handleChange}
          data={props.dataSet}
        />
      </div>
    </div>
  )
}

export default Popup
