import { useState } from 'react';


const useFormValidation = (initialState = {}, callback) => {
   const [values, setValues] = useState(initialState);

   const onClearAll = () => {
      setValues(initialState);
   };
   const onChange = (e) => {
      const { name, value } = e.target;

      setValues({
         ...values,
         [name]: value
      });
   };


   const onSubmit = async (e) => {
      e.preventDefault();
      callback();
   };

   return { values, onClearAll, onChange, onSubmit };
};

export default useFormValidation;
