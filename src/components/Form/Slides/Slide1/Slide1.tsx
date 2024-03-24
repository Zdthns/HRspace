import { FormLayout } from "@/components/FormLayout/FormLayout"
import type { ZSlide1 } from "@/lib/form/slides/slide1"
import inputStyle from "@components/Input/Input.module.css"
import clsx from "classnames"
import { useFormContext } from "react-hook-form"
import { CitySelect } from "../../components/Selects/CitySelect"
import { ProfSelect } from "../../components/Selects/ProfSelect"
import styles from "./Slide1.module.css"
import { Error } from "../../Error/Error"
import image from "@public/slide1.svg"

export function Slide1() {
  const {
    register,
    formState: { errors },
  } = useFormContext<ZSlide1>()

  return (
    <FormLayout layoutClass={styles["layout"]} srcImage={image}>
      <h2 className={styles["head"]}>Заполните данные по вакансии</h2>
      <h3 style={{ marginTop: 15 }} className={styles["name-label"]}>
        Название вакансии*
      </h3>
      <div className={styles["name"]}>
        <input
          type="text"
          {...register("name")}
          placeholder="Грузчик"
          className={inputStyle["input-currency"]}
        />
        <Error message={errors.name?.message} />
      </div>

      <h3 className={styles["city-label"]}>Город*</h3>
      <CitySelect className={styles["city"]} />
      <h3 className={styles["prof-label"]}>Профессия*</h3>
      <ProfSelect className={styles["prof"]} />
      <h3 className={styles["salary-range-label"]}>
        Зарплата gross
        <br />
        (до вычета НДФЛ)*
      </h3>
      <div className={styles["salary-range"]}>
        <div
          className={clsx(
            inputStyle["input-wrapper"],
            inputStyle["input-wrapper_start-from"],
            inputStyle["input-wrapper_end-ruble"],
          )}
        >
          <input
            {...register("salaryRange.salary_min", { valueAsNumber: true })}
            type="number"
            placeholder="25000"
            className={inputStyle["input-currency"]}
          />
        </div>
        <div
          className={clsx(
            inputStyle["input-wrapper"],
            inputStyle["input-wrapper_start-to"],
            inputStyle["input-wrapper_end-ruble"],
          )}
        >
          <input
            {...register("salaryRange.salary_max", { valueAsNumber: true })}
            type="number"
            placeholder="67000"
            className={inputStyle["input-currency"]}
          />
        </div>
        <Error message={errors.salaryRange?.salary_min?.message} />
        <Error message={errors.salaryRange?.salary_max?.message} />
      </div>
    </FormLayout>
  )
}
