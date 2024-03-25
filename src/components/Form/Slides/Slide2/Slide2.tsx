import { FormLayout } from "@/components/FormLayout/FormLayout"
import { MAX_OPTIONS_COUNT } from "@/constants"
import globalStyles from "@/globalStyle.module.css"
import { type ZSlide2 } from "@/lib/form/slides/slide2"
import {
  citizenship,
  education,
  employeeResponsibilities,
  programs,
} from "@/mock/jsons"
import { getOptionsByArr } from "@/utils/getOptionsByArr"
import inputStyle from "@components/Input/Input.module.css"
import { RadioGroup } from "@components/RadioGroup/RadioGroup"
import RadioGroupStyle from "@components/RadioGroup/RadioGroup.module.css"
import image from "@public/slide2.svg"
import clsx from "classnames"
import { Controller, useFormContext } from "react-hook-form"
import Select from "react-select"
import { Error } from "../../Error/Error"
import { Info } from "../../components/Info/Info"
export function Slide2() {
  const {
    formState: { errors },
    control,
    register,
    trigger,
  } = useFormContext<ZSlide2>()

  // TODO: mock
  const employeeResponsibilitiesOptions = getOptionsByArr(
    employeeResponsibilities,
  )

  const programsOptions = getOptionsByArr(programs)

  return (
    <FormLayout srcImage={image}>
      <h2>Описание вакансии</h2>

      <div
        style={{
          display: "grid",
          alignItems: "baseline",
          gridTemplateColumns: "200px 1fr",
          columnGap: 16,
        }}
      >
        <h3
          style={{
            marginTop: 13,
          }}
        >
          Обязанности сотрудника
        </h3>
        <div>
          <Controller
            name="employeeResponsibilities"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix={"react-select"}
                className="react-select-container"
                {...field}
                isMulti={true}
                options={employeeResponsibilitiesOptions}
                placeholder="Выберите обязанности..."
                noOptionsMessage={() => "Опций не найдено"}
                onChange={selectedOptions => {
                  if (selectedOptions.length <= MAX_OPTIONS_COUNT) {
                    field.onChange(selectedOptions.map(option => option.value))
                  }
                }}
                value={employeeResponsibilitiesOptions.filter(option =>
                  field.value.includes(option.value),
                )}
              />
            )}
          />
          {<Info>Выберите до 10 параметров</Info>}
          <Error message={errors.employeeResponsibilities?.message} />
        </div>
      </div>
      <h3 style={{ marginTop: 28 }}>Требования к сотруднику*</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px 1fr",
          alignItems: "baseline",
          columnGap: 16,
          rowGap: 20,
          paddingLeft: 40,
        }}
      >
        <h3>Образование</h3>
        <div>
          <Controller
            name="education"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(education)}
                nameGroup="education"
                onChange={v => {
                  field.onChange(v)
                  trigger("education")
                }}
                changedValue={field.value}
                className={RadioGroupStyle["radio-group__fieldset_education"]}
              />
            )}
          />
          <Error message={errors.education?.message} />
        </div>

        <h3>Стаж</h3>
        <div>
          <div
            className={clsx(
              inputStyle["input-wrapper"],
              inputStyle["input-wrapper_start-from"],
              inputStyle["input-wrapper_end-year"],
            )}
          >
            <input
              {...register("experience", { valueAsNumber: true })}
              placeholder="5"
              type="number"
              className={inputStyle["input-currency"]}
            />
          </div>
          <Error message={errors.experience?.message} />
        </div>

        <h3>Гражданство</h3>
        <div>
          <Controller
            name="citizenship"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(citizenship)}
                nameGroup="citizenship"
                onChange={v => {
                  field.onChange(v)
                  trigger("citizenship")
                }}
                changedValue={field.value}
                className={RadioGroupStyle["radio-group__fieldset_citizenship"]}
              />
            )}
          />
        </div>

        <h3>Владение программами</h3>
        <div>
          <Controller
            name="softwareSkills"
            control={control}
            render={({ field }) => (
              <Select
                classNamePrefix={"react-select"}
                className="react-select-container"
                {...field}
                isMulti={true}
                options={programsOptions}
                placeholder="Выберите программы..."
                noOptionsMessage={() => "Опций не найдено"}
                onChange={selectedOptions => {
                  if (selectedOptions.length <= MAX_OPTIONS_COUNT) {
                    field.onChange(selectedOptions.map(option => option.value))
                  }
                }}
                value={programsOptions.filter(option =>
                  field.value.includes(option.value),
                )}
              />
            )}
          />
          <Error message={errors.softwareSkills?.message} position="relative" />
        </div>
        <h3>Водительские права</h3>
        <input
          className={globalStyles["checkBox"]}
          type="checkbox"
          {...register("drivingLicense")}
        />
        <h3>Автомобиль</h3>
        <input
          className={globalStyles["checkBox"]}
          type="checkbox"
          {...register("carOwnership")}
        />
      </div>
    </FormLayout>
  )
}
