import { ReactElement } from "react"

export type LendingCardType = {
  buttonType: "add" | "search" | "callback"
  cardName: string
  captions: string | ReactElement
  buttonText: string
  image: string
}
export type TData = {
  dataSetInput: TdataSetInput[]
  dataSetButton?: TdataSetButton[]
  heading?: string
  fieldset?: string
}

export type TdataSetInput = {
  name: string
  value?: string,
  minLength?: string
  maxLength?: string
  label?: string
  placeholder?: string
  type: 'text' | 'tel'
}
export type TForm = {
  [name: string]: string | undefined
}
export type TdataSetButton = {
  buttonType: "add" | "search" | "callback"
  buttonText: string
}

//***form***

export interface IFieldSet {
  name?: string
  phone?: number
  city?: string

}