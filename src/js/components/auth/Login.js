import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


import Form from '@formElements/Form';
import AuthContext from '../../state/auth/AuthContext';

const Login = (props) => {
   const authContext = useContext(AuthContext);


   const { errors, login, isAuthenticated, clearErr } = authContext;

   const initialState = {
      email: 'h@h.dk',
      password: 'Test123'

   };
   const history = useHistory();
   useEffect(() => {

      if (isAuthenticated) {
         history.push('/');
      }
      clearErr();

   }, [isAuthenticated, history]);

   const [user, setUser] = useState(initialState);


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
      login(user);

      setUser(initialState);

   };


   return (
      <div>
         <h1>Account Login</h1>

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
