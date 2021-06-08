import { useState, useContext } from 'react';

import Form from '@formElements/Form';

import AuthContext from '../../state/auth/AuthContext';

const Login = () => {
   const authContext = useContext(AuthContext);

   const initialState = {
      email: 'h@h.dk',
      password: 'Test123'

   };


   const [user, setUser] = useState(initialState);
   const [errors, setErrors] = useState({});
   const { email, password } = user;

   const inputs = [

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
      authContext.login(user);

      setUser(initialState);

   };


   return (
      <div>
         <h1>Account Login</h1>
         <div>{errors.noUser}</div>
         <Form
            inputs={inputs}
            onChange={onChange}
            btnText={'Login'}
            onSubmit={onSubmit}
         />
      </div>
   );
};

export default Login;
