import { useState } from 'react';

import { ChangeEventType, FormEventType } from '../interfaces/events';
import { KeyValuePair } from '../interfaces/interfaces';

const useFormValidation = (
  initialState: KeyValuePair<string>,
  callback: (values: KeyValuePair<string>) => void
) => {
  const [values, setValues] = useState(initialState);

  const onClearAll = () => {
    setValues(initialState);
  };
  const handleChange = (e: ChangeEventType) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEventType) => {
    e.preventDefault();
    callback(values);
  };

  return { values, handleChange, handleSubmit, onClearAll };
};

export default useFormValidation;
