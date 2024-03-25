import React, { useCallback, useState } from "react"
import styles from "./styles.module.css"
import CreatableSelect from "react-select/creatable"
import { citiesOfRussia } from "./lib/city"
import Select from "react-select"
import Button from "../../button/Button"

const options = citiesOfRussia

export interface IOption {}

const SearchCity = () => {
  const [currentCity, setCurrentCity] = useState<any>(["Москва"])

  const getValue = () => {
    return currentCity ? options.find(c => c.value === currentCity) : ""
  }
  const onChange = (newValue: any) => {
    setCurrentCity(newValue.value)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Укажите город</h1>
      <Select
        className={styles.select}
        placeholder={"введите город для поиска"}
        onChange={onChange}
        options={options}
        value={getValue()}
      />
      <Button buttonText={"Найти"} />
    </div>
  )
}

export default SearchCity
