import {
  formSchema,
  isSlideKey,
  slideFields,
  type ZForm,
} from "@/lib/form/form"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "./Slides"
import { Header } from "@/components/header/Header"
import { ProgressBar } from "../ProgressBar/ProgressBar"
import styles from "./Form.module.css"
import clsx from "classnames"

export function Form() {
  const methods = useForm<ZForm>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      // слайд 2
      education: "Любое",
      citizenship: "Не имеет значения",
      softwareSkills: [],
      employeeResponsibilities: [],
      drivingLicense: false,
      carOwnership: false,

      // слайд 4
      recruiterTasks: [],

      // слайд 5
      specialSkills: [],
      additionalTasks: [],
      blacklistedCompanies: [],
    },
  })

  const onSubmit = async (data: ZForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log(data)
  }

  const [count, setCount] = useState(1)

  const increment = async () => {
    const slide = `Slide${count}`
    if (isSlideKey(slide)) {
      const fields = slideFields[slide]
      const isCurrentSlideValid = await methods.trigger(fields)
      if (isCurrentSlideValid) {
        setCount(prev => prev + 1)
      }
    }
  }
  const decrement = () => setCount(prev => --prev)

  return (
    <div style={{ padding: "0 0 97px" }}>
      <Header />
      <div
        style={{
          maxWidth: 1296,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: 14,
            height: 20,
            margin: "32px 0 40px",
          }}
        >
          Главная / Мои заявки
        </p>
        <h1
          style={{
            margin: "0 0 39px",
            fontSize: 24,
          }}
        >
          Добавление заявки
        </h1>
        <ProgressBar value={count} />
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            onKeyDown={e => e.key === "Enter" && e.preventDefault()}
          >
            {/* <button>submit</button> */}
            {/* <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 /> */}
            {
              [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />][
                count - 1
              ]
            }
            <div
              style={{ display: "flex", gap: 24, justifyContent: "flex-end" }}
            >
              {count > 1 && (
                <button
                  className={clsx(styles["button"], styles["button--back"])}
                  type="button"
                  onClick={decrement}
                >
                  Назад
                </button>
              )}
              {count < 5 && (
                <button
                  type="button"
                  onClick={increment}
                  className={clsx(styles["button"], styles["button--next"])}
                >
                  Далее
                </button>
              )}
              {count === 5 && (
                <button
                  className={clsx(styles["button"], styles["button--submit"])}
                  disabled={methods.formState.isSubmitting}
                  type="submit"
                >
                  Опубликовать
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
      <DevTool control={methods.control} />
    </div>
  )
}