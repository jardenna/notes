import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '@formElements/Form';
import { signupUrl, userUrl } from '../../utils/endpoints';


const Register = () => {

   const initialState = {
      name: '',
      email: '',
      password: '',
      password2: ''
   };

   let history = useHistory();


   const setUserContext = async () => {
      try {
         const res = await fetch(userUrl, {
            credentials: 'include'

         });
         const data = await res.json();
         console.log(data);
      } catch (e) {
         console.log(e);
      }
   };

   const [user, setUser] = useState(initialState);
   const [errors, setErrors] = useState({});

   const { name, email, password, password2 } = user;

   const confirmPasswordErr = password !== password2 ? 'The password does not match' : null;
   const inputs = [
      {
         type: 'text',
         name: 'name',
         placeholder: 'name',
         inputIdentifier: 'name',
         label: 'Name',
         isRequired: true,
         value: name,
         error: errors.name

      },
      {
         type: 'email',
         name: 'email',
         inputIdentifier: 'email',
         placeholder: 'email',
         label: 'Email',
         isRequired: true,
         value: email,
         error: errors.email


      },

      {
         type: 'password',
         name: 'password',
         placeholder: 'password',
         inputIdentifier: 'password',
         label: 'Password',
         isRequired: true,
         value: password,
         error: errors.password


      },

      {
         type: 'password',
         name: 'password2',
         placeholder: 'Confirm password',
         inputIdentifier: 'password2',
         label: 'Confirm password',
         isRequired: true,
         value: password2,
         error: confirmPasswordErr


      }

   ];


   const onChange = (e) => {
      const { name, value } = e.target;

      setUser({
         ...user,
         [name]: value
      });
   };


   const onSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await fetch(signupUrl, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(user),
            headers: {
               'Content-Type': 'application/json'
            }
         });
         const data = await res.json();
         if (data.errors) {
            setErrors(data.errors);
         } else {
            setUser(data);
            setErrors({});
         }

      } catch (err) {
         console.log(err);
      }
      setUser(initialState);

   };

   return (
      <div>
         <h1>Account Register</h1>
         <Form
            inputs={inputs}
            onChange={onChange}
            btnText={'Register'}
            onSubmit={onSubmit}
         />

         <button onClick={setUserContext}>klik</button>
      </div>
   );
};

export default Register;
