import { ReactEventHandler, useState } from "react";
import { TForm } from "../../../types/typesLending";

export function useHookForm(inputValues: TForm) {
  const [values, setValues] = useState(inputValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}


//  const {values, handleChange, setValues} = useForm({});