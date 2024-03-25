import { useEffect, useState } from "react"
import globalStyle from "@/globalStyle.module.css"
type Option<T> = { value: T; label: string }

interface Props<T> {
  options: readonly Option<T>[]
  selectedOptions: Array<T>
  onChange: (options: T[]) => void
}

export function CheckboxGroup<T>({
  options,
  onChange,
  selectedOptions,
}: Props<T>) {
  const [selected, setSelected] = useState(selectedOptions)
  useEffect(() => {
    onChange(selected)
  }, [onChange, selected])
  const handleChange = (checkedOption: Option<T>, isChecked: boolean) => {
    if (isChecked) {
      setSelected(prev => [checkedOption.value, ...prev])
    } else {
      setSelected(prev => prev.filter(el => el !== checkedOption.value))
    }
  }

  return (
    <fieldset
      style={{
        margin: 0,
        padding: 0,
        border: "none",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: 24,
        rowGap: 12,
      }}
    >
      {options.map(option => (
        <label
          key={String(option.value)}
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: 12,
          }}
        >
          <input
            id={option.label}
            className={globalStyle["checkBox"]}
            type="checkbox"
            checked={selected.some(
              selectedOption => selectedOption === option.value,
            )}
            onChange={e => handleChange(option, e.target.checked)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}
