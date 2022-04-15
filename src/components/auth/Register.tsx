import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../common/FormElements/Form';
import AuthContext from '../../state/auth/AuthContext';
import {
  BlurEventType,
  ChangeEventType,
  FormEventType,
} from '../../interfaces/events';
const Register = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const authContext = useContext(AuthContext);

  const { register, errors, clearErr, isAuthenticated, blur } = authContext;
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    clearErr();
  }, [isAuthenticated, history]);

  const [user, setUser] = useState(initialState);
  const [passwordErr, setPasswordErr] = useState('');
  const { name, email, password, password2 } = user;

  const equalPasswords = password === password2;
  const inputs = [
    {
      type: 'text',
      name: 'name',
      placeholder: 'name',
      inputIdentifier: 'name',
      label: 'Name',
      isRequired: true,
      value: name,
      error: errors.name,
    },
    {
      type: 'email',
      name: 'email',
      inputIdentifier: 'email',
      placeholder: 'email',
      label: 'Email',
      isRequired: true,
      value: email,
      error: errors.email,
    },

    {
      type: 'password',
      name: 'password',
      placeholder: 'password',
      inputIdentifier: 'password',
      label: 'Password',
      isRequired: true,
      value: password,
      error: errors.password,
    },
    {
      type: 'password',
      name: 'password2',
      placeholder: 'Confirm password',
      inputIdentifier: 'password2',
      label: 'Confirm password',
      isRequired: true,
      value: password2,
      error: passwordErr,
    },
  ];

  const onClearAll = () => {
    setUser(initialState);
  };
  const onChange = (e: ChangeEventType) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const onBlur = (e: BlurEventType) => {
    const { name } = e.target;
    blur(name);
  };
  const onSubmit = async (e: FormEventType) => {
    e.preventDefault();
    if (equalPasswords) {
      register(user);
    }
    if (!equalPasswords) {
      setPasswordErr('The password does not match');
    } else {
      setPasswordErr('');
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <Form
        inputs={inputs}
        onChange={onChange}
        btnText={'Register'}
        onSubmit={onSubmit}
        onClearAll={onClearAll}
        clearBtn
        onBlur={onBlur}
      />
    </div>
  );
};

export default Register;
