import { FC, useEffect, useState } from 'react';

import Form from '../common/FormElements/Form';
import useFormValidation from '../../hooks/useFormValidation';

import { BlurEventType } from '../../interfaces/events';
import { PageProps } from '../../interfaces/interfaces';
import { InputListProps } from '../../interfaces/form';
import { PageId } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  register,
  login,
  reset,
  currentUser,
} from '../../features/auth/authSlice';

const Login: FC<PageProps> = ({ id, title }) => {
  const { user, isLoading, isError, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, []);

  const [passwordErr, setPasswordErr] = useState('');
  const handleRegister = async () => {
    const equalPasswords = password === password2;

    if (equalPasswords) {
      dispatch(register(values));
    }
    if (!equalPasswords) {
      setPasswordErr('The password does not match');
    } else {
      setPasswordErr('');
    }
  };

  const handleLogin = () => {
    dispatch(login(values));
  };

  const isLoginPage = id === PageId.Login;
  const callBackFn = isLoginPage ? handleLogin : handleRegister;
  const { values, handleChange, handleSubmit, onClearAll } = useFormValidation(
    initialState,
    callBackFn
  );
  const { name, email, password, password2 } = values;
  useEffect(() => {
    dispatch(reset());
  }, []);

  const inputs: InputListProps[] = [
    {
      name: 'name',
      placeholder: 'name',
      inputIdentifier: 'name',
      label: 'Name',
      isRequired: true,
      value: name,
      error: isError && isError.name,
      hidden: id === PageId.Login,
    },
    {
      type: 'email',
      name: 'email',
      inputIdentifier: 'email',
      placeholder: 'email',
      label: 'Email',
      isRequired: true,
      value: email,
      error: isError && isError.email,
    },

    {
      type: 'password',
      name: 'password',
      placeholder: 'password',
      inputIdentifier: 'password',
      label: 'Password',
      isRequired: true,
      value: password,
      error: isError && isError.password,
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
      hidden: id === PageId.Login,
    },
  ];
  const onBlur = (e: BlurEventType) => {
    const { name } = e.target;
    console.log(name);

    // blur(name);
  };

  return (
    <>
      <h1>{title}</h1>

      {isError?.noUser}
      <Form
        inputs={inputs}
        onChange={handleChange}
        btnText={isLoginPage ? 'Login' : 'Register'}
        onSubmit={handleSubmit}
        onClearAll={onClearAll}
        onBlur={onBlur}
        showResetButton
      />
    </>
  );
};

export default Login;
