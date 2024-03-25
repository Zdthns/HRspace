import { FormLayout } from "@/components/FormLayout/FormLayout"
import { type ZSlide4 } from "@/lib/form/slides/slide4"
import { paymentType, recruiterTasks, resumeFormat } from "@/mock/jsons"
import { getOptionsByArr } from "@/utils/getOptionsByArr"
import { CheckboxGroup } from "@components/CheckboxGroup/CheckboxGroup"
import inputStyle from "@components/Input/Input.module.css"
import { RadioGroup } from "@components/RadioGroup/RadioGroup"
import RadioGroupStyle from "@components/RadioGroup/RadioGroup.module.css"
import Arrow from "@public/arrow.svg"
import clsx from "classnames"
import { Controller, useFormContext } from "react-hook-form"
import { Error } from "../../Error/Error"
import { Info } from '../../components/Info/Info';

export function Slide4() {
  const {
    formState: { errors },
    control,
    register,
    trigger,
  } = useFormContext<ZSlide4>()

  return (
    <FormLayout>
      <h2>Условия сотрудничества</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "196px 1fr",
          columnGap: 24,
          rowGap: 40,
        }}
      >
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
        <h3>Что входит в работу рекрутера</h3>
        <div>
          <Controller
            control={control}
            name="recruiterTasks"
            render={({ field }) => {
              return (
                <CheckboxGroup
                  selectedOptions={field.value}
                  options={getOptionsByArr(recruiterTasks)}
                  onChange={field.onChange}
                />
              )
            }}
          />
          <Error message={errors.recruiterTasks?.message} />
        </div>

        <h3>В каком виде необходимо предоставить резюме кандидатов?</h3>
        <div>
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
                className={
                  RadioGroupStyle["radio-group__fieldset_resumeFormat"]
                }
              />
            )}
          />
          <Error message={errors.resumeFormat?.message} />
        </div>

        <h3 style={{ margin: 0 }}>Желаемая дата получения первых резюме</h3>
        <div>
          <input
            style={{ width: 200 }}
            type="date"
            className={inputStyle["input-currency"]}
            {...register("dates.desiredFirstResumeDate")}
          />
          <Error message={errors.dates?.desiredFirstResumeDate?.message} />
        </div>
        <h3 style={{ margin: 0 }}>Желаемая дата выхода сотрудника на работу</h3>
        <div>
          <input
            className={inputStyle["input-currency"]}
            style={{ width: 200 }}
            type="date"
            {...register("dates.desiredEmployeeExitDate")}
          />
          <Info>
            За срочный поиск рекрутер может запросить более высокую цену.
          </Info>
          <Error message={errors.dates?.desiredEmployeeExitDate?.message} />
        </div>
      </div>

      <div
        style={{
          marginTop: 48,
          marginBottom: 110,
          display: "grid",
          alignItems: "baseline",
          gridTemplateColumns: "1fr max-content 1fr",
        }}
      >
        <div>
          <h2>Сумма вознаграждения рекрутеру</h2>
          <div style={{ display: "flex", gap: 8 }}>
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
            <p>/за одного сотрудника</p>
          </div>
            <Info>Это средняя сумма по рынку для этой специальности  </Info>
          <Error message={errors.employeeReward?.message} position="relative" />

          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "12px 0 0 18px",
              padding: "0 0 0 4px",
              fontSize: 14,
              lineHeight: "1.4",
              gap: 12
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
          style={{ width: 234, height: 113, margin: "auto 25px" }}
        />
        <div>
          <h2>Выберите способ выплаты</h2>
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
    </FormLayout>
  )
}
