import React, { useCallback, useState } from "react"
import styles from "../styles.module.css"
import CreatableSelect from "react-select/creatable"
import { citiesOfRussia } from "./lib/city"
import Select from "react-select"

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
    <div>
      <h1 className={styles.heading}>Укажите город</h1>
      <Select
        placeholder={"введите город для поиска"}
        onChange={onChange}
        options={options}
        value={getValue()}
      />
    </div>
  )
}

export default SearchCity
