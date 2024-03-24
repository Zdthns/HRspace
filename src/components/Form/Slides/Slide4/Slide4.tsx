import { FormLayout } from "@/components/FormLayout/FormLayout"
import globalStyle from "@/globalStyle.module.css"
import { type ZSlide4 } from "@/lib/form/slides/slide4"
import { paymentType, recruiterTasks, resumeFormat } from "@/mock/jsons"
import { getOptionsByArr } from "@/utils/getOptionsByArr"
import { CheckboxGroup } from "@components/CheckboxGroup/CheckboxGroup"
import inputStyle from "@components/Input/Input.module.css"
import { RadioGroup } from "@components/RadioGroup/RadioGroup"
import RadioGroupStyle from "@components/RadioGroup/RadioGroup.module.css"
import clsx from "classnames"
import { Controller, useFormContext } from "react-hook-form"
import { Info } from "../../components/Info/Info"
import Arrow from "@public/arrow.svg"
import { Error } from "../../Error/Error"
const PicturePlaceholder = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        width: 306,
        height: 111,
        backgroundColor: "lightcoral",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Иллюстрация?
    </div>
  )
}

export function Slide4() {
  const {
    formState: { errors },
    control,
    register,
    trigger,
  } = useFormContext<ZSlide4>()

  return (
    <FormLayout withPhoto={false}>
      <h2>Условия сотрудничества</h2>
      <div
        style={{
          marginTop: 28,
          marginBottom: 110,
          display: "grid",
          alignItems: "baseline",
          gridTemplateColumns: "306px max-content 1fr",
          paddingRight: 190,
        }}
        className={globalStyle["marginLeft"]}
      >
        <div>
          <PicturePlaceholder />
          <h3>Установите вознаграждение за сотрудника</h3>
          <div
            className={clsx(
              inputStyle["input-wrapper"],
              inputStyle["input-wrapper_end-ruble"],
            )}
          >
            <input
              type="number"
              placeholder="10000"
              {...register("employeeReward", { valueAsNumber: true })}
              className={clsx(inputStyle["input-currency"])}
            />
          </div>
          <Error message={errors.employeeReward?.message} position="relative" />

          <ul
            style={{
              margin: "0 0 0 18px",
              padding: 0,
              fontSize: 14,
              lineHeight: "1.4",
            }}
          >
            <li>
              <p style={{ margin: 0, padding: 0 }}>
                Рекомендованная сумма — среднемесячный доход кандидата и выше
              </p>
            </li>
            <li>
              <p style={{ margin: 0, padding: 0 }}>
                80% суммы — оплата работы рекрутера, 20% — комиссия HRspace
              </p>
            </li>
          </ul>
        </div>
        <img
          src={Arrow}
          alt="стрелка"
          style={{ width: 82, height: 24, margin: "auto 25px" }}
        />
        <div>
          <PicturePlaceholder />
          <h3>Выберите способ выплаты</h3>
          <div>
            <Controller
              name="paymentType"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  options={getOptionsByArr(paymentType)}
                  nameGroup="paymentType"
                  onChange={v => {
                    field.onChange(v)
                    trigger("paymentType")
                  }}
                  changedValue={field.value}
                  className={
                    RadioGroupStyle["radio-group__fieldset_paymentType"]
                  }
                />
              )}
            />
            <Error message={errors.paymentType?.message} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, alignItems: "baseline" }}>
        <h3>Количество сотрудников</h3>
        <div>
          <Controller
            name="employeeCount"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                  { label: "4", value: 4 },
                  { label: "5", value: 5 },
                  { label: "6", value: 6 },
                  { label: "7", value: 7 },
                  { label: "8", value: 8 },
                  { label: "9", value: 9 },
                  { label: "10", value: 10 },
                ]}
                nameGroup="employeeCount"
                onChange={v => {
                  field.onChange(v)
                  trigger("employeeCount")
                }}
                changedValue={field.value}
                className={
                  RadioGroupStyle["radio-group__fieldset_employeeCount"]
                }
              />
            )}
          />
          <Error message={errors.employeeCount?.message} />
        </div>
      </div>
      <h3>Что входит в работу рекрутера</h3>
      <div className={globalStyle["marginLeft"]}>
        <Controller
          control={control}
          name="recruiterTasks"
          render={({ field }) => {
            return (
              <CheckboxGroup
                options={getOptionsByArr(recruiterTasks)}
                onChange={field.onChange}
              />
            )
          }}
        />
        <Error message={errors.recruiterTasks?.message} />
      </div>
      <h3>В каком виде необходимо предоставить резюме кандидатов?</h3>
      <div className={globalStyle["marginLeft"]}>
        <Controller
          name="resumeFormat"
          control={control}
          render={({ field }) => (
            <RadioGroup
              options={getOptionsByArr(resumeFormat)}
              nameGroup="resumeFormat"
              onChange={v => {
                field.onChange(v)
                trigger("resumeFormat")
              }}
              changedValue={field.value}
              className={RadioGroupStyle["radio-group__fieldset_resumeFormat"]}
            />
          )}
        />
        <Error message={errors.resumeFormat?.message} />
      </div>
      <div style={{ display: "flex", gap: 40, marginTop: 50 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Желаемая дата получения первых резюме</h3>
          <Info style={{ textAlign: "center" }}>(В среднем - от 7 дней. )</Info>
        </div>
        <div>
          <input
            type="date"
            className={inputStyle["input-currency"]}
            {...register("dates.desiredFirstResumeDate", {
              setValueAs: v => new Date(v).getTime(),
            })}
          />
          <Error message={errors.dates?.desiredFirstResumeDate?.message} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
        <div>
          <h3 style={{ margin: 0 }}>
            Желаемая дата выхода сотрудника на работу
          </h3>
          <Info style={{ textAlign: "center" }}>
            По статистике площадки средний срок - 1 месяц.
          </Info>
        </div>
        <div>
          <input
            className={inputStyle["input-currency"]}
            type="date"
            {...register("dates.desiredEmployeeExitDate", {
              setValueAs: v => new Date(v).getTime(),
            })}
          />
          <Error message={errors.dates?.desiredEmployeeExitDate?.message} />
        </div>
      </div>
    </FormLayout>
  )
}
