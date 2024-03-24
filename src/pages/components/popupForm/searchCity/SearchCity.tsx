import React from "react"
import styles from "../styles.module.css"

import CreatableSelect from "react-select/creatable"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export interface IOption {}

const SearchCity = () => {
  return (
    <div>
      <h1 className={styles.heading}>Обратный звонок</h1>
      <CreatableSelect isClearable options={cityList} />
    </div>
  )
}

export default SearchCity
