import React from "react"
import styles from "../styles.module.css"
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "../../button/Button"

export interface IForm {
  name: string
  tel: number
}

const callback = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IForm>({
    mode: "onBlur",
  })

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data)
    reset()
  }
  return (
    <div>
      <h1 className={styles.heading}>Обратный звонок</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          {...register("name", {
            required: "Это поле не может быть пустым!",
            minLength: {
              value: 2,
              message: "имя не может быть менее 2 символов",
            },
            maxLength: {
              value: 35,
              message: "имя не может быть более 35 символов",
            },
          })}
          type="text"
        />{" "}
        {errors?.name && (
          <div className={styles.errorMessage}>
            {errors.name.message || "error"}
          </div>
        )}
        <input
          className={styles.input}
          type="tel"
          placeholder="+71231234567"
          {...register("tel", {
            required: "Это поле не может быть пустым!",
            pattern: {
              value: /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
              message: "Введен не корректный номер телефона",
            },
          })}
        />{" "}
        <div className={styles.errorMessage}>
          {errors?.tel && (
            <div className={styles.errorMessage}>
              {errors.tel.message || "error"}
            </div>
          )}
        </div>
        <Button type="submit" buttonText={"Заказать звонок"} />
      </form>
    </div>
  )
}

export default callback
