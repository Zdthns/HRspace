import {
  TData,
  TForm,
  TdataSetButton,
  TdataSetInput,
} from "@/pages/types/typesLending"
import styles from "./styles.module.css"
import { useForm, SubmitHandler, RegisterOptions } from "react-hook-form"
import Button from "../button/Button"

type PropTypes = {
  data: TData
  buttonText?: string
  form: TForm
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onSubmit: React.FormEventHandler<HTMLFormElement>
  resetForm?: () => void
  buttonVisible?: boolean
  handlerClick?: () => void
}

const Form: React.FC<PropTypes> = ({ data, form, onChange, handlerClick }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TdataSetInput>()

  const onSubmit: SubmitHandler<TdataSetInput> = data => {
    console.log(data)
  }
  const { dataSetInput, dataSetButton } = data

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {dataSetInput.map(elem => (
        <>
          <label>{elem.label}</label>
          <input
            className={styles.input}
            {...register("name", {
              required: "error!",
            })}
            key={`${elem.name}`}
            type={elem.type}
            name={elem.name}
            value={form[elem.name] || ""}
            placeholder={elem.placeholder}
            onChange={onChange}
          />
        </>
      ))}
      {errors.name && <div style={{ color: "red" }}>{errors.name.message}</div>}
      {dataSetButton?.map((item: TdataSetButton) => (
        <Button
          className={styles.button}
          buttonType={item.buttonType}
          buttonText={item.buttonText}
        />
      ))}
    </form>
  )
}

export default Form
