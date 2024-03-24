import styles from "./RadioGroup.module.css"
import classNames from "classnames"

type TOption<T> = {
  value: T
  label: string
}

type TRadioGroup<T> = {
  options: TOption<T>[]
  nameGroup: string
  onChange: (value: T) => void
  changedValue: T
  className: string
}

export function RadioGroup<T>({
  options,
  nameGroup,
  onChange,
  changedValue,
  className,
}: TRadioGroup<T>) {
  return (
    <fieldset
      className={classNames(styles["radio-group__fieldset"], className)}
      onChange={(event: React.FormEvent<HTMLFieldSetElement>) => {
        const target = event.target as HTMLInputElement
        if (target && target.type === "radio") {
          const selectedValue = options.find(
            option => target.id === option.label,
          )
          if (selectedValue) {
            onChange(selectedValue.value)
          }
        }
      }}
    >
      {options.map(option => (
        <label
          className={classNames(
            styles["radio-label"],
            option["value"] === changedValue && styles["radio-label--checked"],
          )}
          key={option.label}
          htmlFor={option.label}
        >
          <input
            className={styles["radio-input"]}
            type="radio"
            id={option.label}
            name={nameGroup}
            checked={option.value === changedValue}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  )
}
