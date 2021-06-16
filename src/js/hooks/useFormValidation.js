import { useState } from 'react';


const useFormValidation = (initialState, callback) => {
   const [values, setValues] = useState(initialState);

   const onClearAll = () => {
      setValues(initialState);
   };
   const onChanges = (e) => {
      const { name, value } = e.target;

      setValues({
         ...values,
         [name]: value
      });
   };

   const onSubmit = async (e) => {
      e.preventDefault();
      callback(values);
   };

   return { values, onClearAll, onChanges, onSubmit };
};

export default useFormValidation;
