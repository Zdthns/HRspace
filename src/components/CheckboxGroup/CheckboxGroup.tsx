import { useEffect, useState } from "react"
import globalStyle from "@/globalStyle.module.css"
type Option<T> = { value: T; label: string }

interface Props<T> {
  options: readonly Option<T>[]
  onChange: (options: T[]) => void
}

export function CheckboxGroup<T>({ options, onChange }: Props<T>) {
  const [selected, setSelected] = useState<T[]>([])
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
        marginTop: 12,
        padding: 0,
        border: "none",
        display: "flex",
        flexDirection: "column",
        rowGap: 8,
      }}
    >
      {options.map(option => (
        <label
          key={String(option.value)}
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: 30,
          }}
        >
          <input
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
