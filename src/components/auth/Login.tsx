import { FC, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../common/FormElements/Form';
import useFormValidation from '../../hooks/useFormValidation';
import AuthContext from '../../state/auth/AuthContext';
import { BlurEventType, ChangeEventType } from '../../interfaces/events';
import { PageProps } from '../../interfaces/interfaces';
import { InputListProps } from '../../interfaces/form';
import { PageId } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  createPost,
  fetchUserById,
  register,
  reset,
} from '../../features/auth/authSlice';

const Login: FC<PageProps> = ({ id, title }) => {
  const authContext = useContext(AuthContext);

  const { login, errors, clearErr, isAuthenticated, blur } = authContext;
  const history = useHistory();
  const initialState = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };
  const dispatch = useAppDispatch();
  const a = useAppSelector(createPost);
  console.log(a);
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

  const callBackFn = id === PageId.Login ? login : handleRegister;
  const { values, handleChange, handleSubmit, onClearAll } = useFormValidation(
    initialState,
    callBackFn
  );
  const { name, email, password, password2 } = values;
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    clearErr();
  }, [isAuthenticated, history]);

  const inputs: InputListProps[] = [
    {
      name: 'name',
      placeholder: 'name',
      inputIdentifier: 'name',
      label: 'Name',
      isRequired: true,
      value: name,
      error: errors.name,
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
      hidden: id === PageId.Login,
    },
  ];
  const onBlur = (e: BlurEventType) => {
    const { name } = e.target;
    blur(name);
  };

  return (
    <>
      <h1>{title}</h1>

      {errors.noUser}
      <Form
        inputs={inputs}
        onChange={handleChange}
        btnText={'Login'}
        onSubmit={handleSubmit}
        onClearAll={onClearAll}
        onBlur={onBlur}
        showResetButton
      />
    </>
  );
};

export default Login;
