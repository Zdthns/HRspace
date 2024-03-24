import type { ZProf, ZSlide1 } from "@/lib/form/slides/slide1"
import { ProfPopup } from "@components/ProfPopup/ProfPopup"
import clsx from "classnames"
import { useCallback, useState } from "react"
import { Controller, useFormContext, useWatch } from "react-hook-form"
import { Error } from "../../Error/Error"
import styles from "./Selects.module.css"

type TProfSelect = {
  className: string
}

export function ProfSelect({ className }: TProfSelect) {
  const {
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useFormContext<ZSlide1>()
  const [showProfPopup, setShowProfPopup] = useState(false)

  const profName = useWatch({
    control,
    name: "prof",
  })?.prof_name

  const handleProfChange = useCallback(
    (selectedProf: ZProf) => {
      setValue("prof", selectedProf)
      trigger("prof")
      setShowProfPopup(false)
    },
    [setValue, trigger],
  )

  return (
    <div className={className}>
      <button
        className={clsx(
          styles["select-button"],
          profName && styles["select-button--selected"],
        )}
        onClick={() => setShowProfPopup(true)}
        type="button"
      >
        {profName ? profName : "Выберите из списка"}
      </button>
      <Error message={errors.prof?.message} />
      <Controller
        name="prof"
        control={control}
        render={({ field }) => (
          <ProfPopup showPopup={showProfPopup} onChange={handleProfChange} />
        )}
      />
    </div>
  )
}
