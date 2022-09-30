import { useState } from "react";

const formatFields = (fields: {[key: string]: [string, any?]}) => {
  const result = {};
  Object.keys(fields).forEach((fieldName) => {
    result[fieldName] = {
      value: fields[fieldName][0],
      validation: fields[fieldName][1] || function() {return true},
      error: false,
    };
  });
  return result;
}

const verifyValidation = ((value: string, validation: Function) => {
  return !validation(value);
});

export const useForm = (fields: {[key: string]: [string, Function?]}) => {
  const [formState, setFormState] = useState<any>(() => formatFields(fields));
  
  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    const currentField = formState[name];
    const newValue = {
      ...currentField,
      value,
      error: verifyValidation(value, currentField.validation)
    };
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  return {
    onChangeInput,
    formState,
    ...formState,
  };
};
