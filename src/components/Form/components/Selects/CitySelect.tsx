import type { City } from "@/components/CityPopup/types"
import { type ZSlide1 } from "@/lib/form/slides/slide1"
import CityPopup from "@components/CityPopup/CityPopup"
import clsx from "classnames"
import { useCallback, useState } from "react"
import { Controller, useFormContext, useWatch } from "react-hook-form"
import { Error } from "../../Error/Error"
import styles from "./Selects.module.css"

type TCitySelect = {
  className: string
}

export function CitySelect({ className }: TCitySelect) {
  const {
    control,
    formState: { errors },
    trigger,
    setValue,
  } = useFormContext<ZSlide1>()
  const [showCityPopup, setShowCityPopup] = useState(false)

  const cityName = useWatch({
    control,
    name: "city",
  })?.name

  const handleCityChange = useCallback(
    (selectedCity: City) => {
      setValue("city", selectedCity)
      trigger("city")
      setShowCityPopup(false)
    },
    [setValue, trigger],
  )

  return (
    <div className={className}>
      <button
        onClick={() => setShowCityPopup(true)}
        type="button"
        className={clsx(
          styles["select-button"],
          cityName && styles["select-button--selected"],
        )}
      >
        {cityName ? cityName : "Выберите из списка"}
      </button>
      <Error message={errors.city?.message} />
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <CityPopup showPopup={showCityPopup} onChange={handleCityChange} />
        )}
      />
    </div>
  )
}
