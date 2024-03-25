import { FormLayout } from "@/components/FormLayout/FormLayout"
import { MAX_OPTIONS_COUNT } from "@/constants"
import globalStyle from "@/globalStyle.module.css"
import { type ZSlide5 } from "@/lib/form/slides/slide5"
import { additionalTasks, companies, specialSkills } from "@/mock/jsons"
import inputStyle from "@components/Input/Input.module.css"
import { RadioGroup } from "@components/RadioGroup/RadioGroup"
import RadioGroupStyle from "@components/RadioGroup/RadioGroup.module.css"
import clsx from "classnames"
import { Controller, useFormContext } from "react-hook-form"
import Select from "react-select"
import { getOptionsByArr } from "../../../../utils/getOptionsByArr"
import { Error } from "../../Error/Error"
import image from "@public/slide5.svg"
export function Slide5() {
  const {
    formState: { errors },
    control,
    register,
    trigger,
  } = useFormContext<ZSlide5>()

  // TODO: mock
  const specialSkillsOptions = getOptionsByArr(specialSkills)
  const additionalTasksOptions = getOptionsByArr(additionalTasks)
  const blacklistedCompaniesOptions = getOptionsByArr(companies)

  return (
    <FormLayout srcImage={image}>
      <h2>Требования к рекрутерам</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "196px 1fr",
          columnGap: 24,
          rowGap: 32,
          alignItems: "baseline",
        }}
      >
        <h3>Опыт</h3>
        <div>
          <div
            className={clsx(
              inputStyle["input-wrapper"],
              inputStyle["input-wrapper_start-from"],
              inputStyle["input-wrapper_end-year"],
            )}
          >
            <input
              className={inputStyle["input-currency"]}
              type="number"
              placeholder="5"
              {...register("experienceYears", { valueAsNumber: true })}
            />
          </div>
          <Error message={errors.experienceYears?.message} />
        </div>
        <h3>Специальные знания/навыки рекрутера</h3>
        <div>
          <Controller
            name="specialSkills"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix={"react-select"}
                className="react-select-container"
                {...field}
                isMulti={true}
                options={specialSkillsOptions}
                placeholder="Выберите навыки..."
                noOptionsMessage={() => "Опций не найдено"}
                onChange={selectedOptions => {
                  if (selectedOptions.length <= MAX_OPTIONS_COUNT) {
                    field.onChange(selectedOptions.map(option => option.value))
                  }
                }}
                value={specialSkillsOptions.filter(option =>
                  field.value.includes(option.value),
                )}
              />
            )}
          />
          <Error message={errors.specialSkills?.message} />
        </div>

        <h3>Дополнительные задачи, кроме подбора сотрудника</h3>
        <div>
          <Controller
            name="additionalTasks"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix={"react-select"}
                className="react-select-container"
                {...field}
                isMulti={true}
                options={additionalTasksOptions}
                placeholder="Выберите задачи..."
                noOptionsMessage={() => "Опций не найдено"}
                onChange={selectedOptions => {
                  if (selectedOptions.length <= MAX_OPTIONS_COUNT) {
                    field.onChange(selectedOptions.map(option => option.value))
                  }
                }}
                value={additionalTasksOptions.filter(option =>
                  field.value.includes(option.value),
                )}
              />
            )}
          />
          <Error message={errors.additionalTasks?.message} />

          <div>
            <label style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <input
                type="checkbox"
                className={globalStyle["checkBox"]}
                {...register("isIndividual")}
              />
              Только для юридических лиц, ИП и самозанятых
            </label>
            <Error message={errors.isIndividual?.message} />
          </div>
        </div>
        <h3>Стоп-лист компаний</h3>
        <div>
          <Controller
            name="blacklistedCompanies"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix={"react-select"}
                className="react-select-container"
                {...field}
                isMulti={true}
                options={blacklistedCompaniesOptions}
                placeholder="Выберите компании..."
                noOptionsMessage={() => "Опций не найдено"}
                onChange={selectedOptions => {
                  if (selectedOptions.length <= MAX_OPTIONS_COUNT) {
                    field.onChange(selectedOptions.map(option => option.value))
                  }
                }}
                value={blacklistedCompaniesOptions.filter(option =>
                  field.value.includes(option.value),
                )}
              />
            )}
          />
          <Error message={errors.blacklistedCompanies?.message} />
        </div>

        <h3>Количество рекрутеров</h3>
        <div>
          <Controller
            name="recruiterCount"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
                className={
                  RadioGroupStyle["radio-group__fieldset_recruiterCount"]
                }
                nameGroup="recruiterCount"
                onChange={v => {
                  field.onChange(v)
                  trigger("recruiterCount")
                }}
                changedValue={field.value}
              />
            )}
          />
          <Error message={errors.recruiterCount?.message} />
        </div>
      </div>
      <label
        style={{
          margin: "40px 0 0",
          display: "flex",
          gap: 12,
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          {...register("acceptOffer")}
          className={globalStyle["checkBox"]}
        />
        Я принимаю условия “Оферты на заключение договора об использовании
        веб-сервиса HRspace“
        <Error message={errors.acceptOffer?.message} />
      </label>
    </FormLayout>
  )
}
