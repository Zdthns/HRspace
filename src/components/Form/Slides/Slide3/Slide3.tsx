import { FormLayout } from "@/components/FormLayout/FormLayout"
import globalStyle from "@/globalStyle.module.css"
import { type ZSlide3 } from "@/lib/form/slides/slide3"
import {
  contractType,
  socialPackage,
  workFormat,
  workSchedule,
} from "@/mock/jsons"
import { RadioGroup } from "@components/RadioGroup/RadioGroup"
import RadioGroupStyle from "@components/RadioGroup/RadioGroup.module.css"
import { Controller, useFormContext } from "react-hook-form"
import { getOptionsByArr } from "../../../../utils/getOptionsByArr"
import { Error } from "../../Error/Error"
import image from "@public/slide3.svg"
export function Slide3() {
  const {
    formState: { errors },
    control,
    trigger,
  } = useFormContext<ZSlide3>()

  return (
    <FormLayout srcImage={image}>
      <h2>Условия работы</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "196px 1fr",
          columnGap: 24,
          rowGap: 20,
          alignItems: "baseline"
        }}
      >
        <h3>График работы</h3>
        <div>
          <Controller
            name="workSchedule"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(workSchedule)}
                nameGroup="workSchedule"
                onChange={v => {
                  field.onChange(v)
                  trigger("workSchedule")
                }}
                changedValue={field.value}
                className={
                  RadioGroupStyle["radio-group__fieldset_workSchedule"]
                }
              />
            )}
          />
          <Error message={errors.workSchedule?.message} />
        </div>

        <h3>Формат работы</h3>
        <div>
          <Controller
            name="workFormat"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(workFormat)}
                nameGroup="workFormat"
                onChange={v => {
                  field.onChange(v)
                  trigger("workFormat")
                }}
                changedValue={field.value}
                className={RadioGroupStyle["radio-group__fieldset_workFormat"]}
              />
            )}
          />
          <Error message={errors.workFormat?.message} />
        </div>
        <h3>Способ оформления</h3>
        <div>
          <Controller
            name="contractType"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(contractType)}
                nameGroup="contractType"
                onChange={v => {
                  field.onChange(v)
                  trigger("contractType")
                }}
                changedValue={field.value}
                className={
                  RadioGroupStyle["radio-group__fieldset_contractType"]
                }
              />
            )}
          />
          <Error message={errors.contractType?.message} />
        </div>
        <h3>Социальный пакет</h3>
        <div>
          <Controller
            name="socialPackage"
            control={control}
            render={({ field }) => (
              <RadioGroup
                options={getOptionsByArr(socialPackage)}
                nameGroup="socialPackage"
                onChange={v => {
                  field.onChange(v)
                  trigger("socialPackage")
                }}
                changedValue={field.value}
                className={
                  RadioGroupStyle["radio-group__fieldset_socialPackage"]
                }
              />
            )}
          />
          <Error message={errors.socialPackage?.message} />
        </div>
      </div>
    </FormLayout>
  )
}
