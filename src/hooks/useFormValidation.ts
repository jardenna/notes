import { useState } from 'react';
import { InitState } from '../components/auth/Login';
import { ChangeEventType, FormEventType } from '../interfaces/events';

const useFormValidation = (
  initialState: InitState,
  callback: (values: InitState) => void
) => {
  const [values, setValues] = useState(initialState);

  const onClearAll = () => {
    setValues(initialState);
  };
  const onChanges = (e: ChangeEventType) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e: FormEventType) => {
    e.preventDefault();
    callback(values);
  };

  return { values, onClearAll, onChanges, onSubmit };
};

export default useFormValidation;
