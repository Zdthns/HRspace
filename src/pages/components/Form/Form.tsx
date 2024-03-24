import type {
  TData,
  TForm,
  TdataSetButton,
  TdataSetInput,
} from "@/pages/types/typesLending"
import styles from "./styles.module.css"
import {
  useForm,
  SubmitHandler,
  RegisterOptions,
  useFieldArray,
} from "react-hook-form"
import Button from "../button/Button"
import { isValid } from "zod"
import { useEffect } from "react"

type PropTypes = {
  data: TData
  //buttonText?: string
  //form: TForm
  //onChange: React.ChangeEventHandler<HTMLInputElement>
  //onSubmit: React.FormEventHandler<HTMLFormElement>
  //handlerClick?: () => void
}

const Form: React.FC<PropTypes> = ({ data }) => {
  const { dataSetInput, dataSetButton, heading, fieldset } = data
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<TdataSetInput>({
    mode: "onBlur",
  })
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "dataFields",
    },
  )
  const onSubmit: SubmitHandler<TdataSetInput> = data => {
    alert(JSON.stringify(data))
    //console.log(data)
  }

  const setInput = dataSetInput.forEach(i => {
    return i
  })
  useEffect(() => {
    reset({
      dataFields: setInput,
    })
  }, [reset])
  console.log(fields)

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {/*{dataSetInput.map(elem => (*/}
      {fields.map((field, index) => (
        <>
          <label>{elem.label}</label>
          <input
            key={field.id}
            {...register(`dataFields.${index}.name`)}
            className={styles.input}
            key={`${elem.name}`}
            type={elem.type}
            name={elem.name}
            //value={form[elem.name] || ""}
            placeholder={elem.placeholder}
            //onChange={onChange}
          />
        </>
      ))}
      {errors?.name && (
        <div style={{ color: "red" }}>{errors?.name.message || "error!"}</div>
      )}
      {dataSetButton?.map((item: TdataSetButton) => (
        <Button
          className={styles.button}
          buttonType={item.buttonType}
          buttonText={item.buttonText}
          disabled={!isValid}
        />
      ))}
    </form>
  )
}

export default Form
