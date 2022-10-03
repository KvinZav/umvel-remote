import { useState } from 'react';

const formatFields = (fields: { [key: string]: [string, (Function | Function[])?] }) => {
  const result = {};
  Object.keys(fields).forEach((fieldName) => {
    const defaultValidation = () => true;
    const { error, errors } = verifyValidations(
      fields[fieldName][0],
      fields[fieldName][1] || defaultValidation
    );
    result[fieldName] = {
      value: fields[fieldName][0],
      validations: fields[fieldName][1] || defaultValidation,
      error,
      errors,
    };
  });
  return result;
};

const verifyValidations = (value: string, validations: Function | Function[]) => {
  if (typeof validations === 'function') {
    const verifyValidation = !validations(value);
    if (verifyValidation) {
      return {
        error: true,
        errors: [
          {
            error: true,
            name: validations.name,
          },
        ],
      };
    } else {
      return {
        error: false,
        errors: [],
      };
    }
  } else {
    const verifyValidations = validations.map((validation) => {
      return {
        error: !validation(value),
        name: validation.name,
      };
    });

    const error = verifyValidations.some((validation) => validation.error);
    return {
      error,
      errors: verifyValidations.filter((validation) => validation.error),
    };
  }
};

export const useForm = (fields: { [key: string]: [string, (Function | Function[])?] }) => {
  const [formState, setFormState] = useState<any>(() => formatFields(fields));

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    const currentField = formState[name];
    const { error, errors } = verifyValidations(value, currentField.validations);
    const newValue = {
      ...currentField,
      value,
      error,
      errors,
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
