import React from 'react';
import {
  ChangeEventType,
  FormEventType,
  BlurEventType,
} from '../interfaces/events';
import { KeyValuePair } from '../interfaces/interfaces';
export type initialValType = { [key: string]: string };
function useFormValidation(
  initialState: KeyValuePair<string>,
  callback: (values: KeyValuePair<string>) => void,
  validate?: (initialState: initialValType) => initialValType
) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState<string[]>([]);
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setTouched([]);
      }
      setSubmitting(false);
    }
  }, [errors]);

  React.useEffect(() => {
    if (validate) {
      const validationErrors = validate && validate(values);
      const touchedErrors = Object.keys(validationErrors)
        .filter((key) => touched.includes(key)) // get all touched keys
        .reduce((acc: { [key: string]: string }, key) => {
          if (!acc[key]) {
            acc[key] = validationErrors[key];
          }
          return acc;
        }, {});
      setErrors(touchedErrors);
    }
  }, [touched, values]);

  function handleChange(e: ChangeEventType) {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  const onClearAll = () => {
    setValues(initialState);
  };
  const handleBlur = (e: BlurEventType) => {
    const { name } = e.target;
    if (!touched.includes(name)) {
      setTouched([...touched, name]);
    }
  };

  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);
    }

    setSubmitting(true);
    callback(values);
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    onClearAll,
  };
}

export default useFormValidation;
