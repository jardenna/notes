import { FC, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../common/FormElements/Form';
import useFormValidation from '../../hooks/useFormValidation';
import AuthContext from '../../state/auth/AuthContext';
import { BlurEventType } from '../../interfaces/events';

export type InitState = {
  email: string;
  password: string;
};
export interface ILogin {
  initialState: InitState;
  login: () => void;
}
const Login: FC = () => {
  const authContext = useContext(AuthContext);

  const { errors, login, isAuthenticated, clearErr, blur } = authContext;
  const initialState = {
    email: '',
    password: '',
  };
  const history = useHistory();
  const { values, onClearAll, onChanges, onSubmit } = useFormValidation(
    initialState,
    login
  );
  const { email, password } = values;
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    clearErr();
  }, [isAuthenticated, history]);

  const inputs = [
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
  ];
  const onBlur = (e: BlurEventType) => {
    const { name } = e.target;
    blur(name);
  };

  return (
    <div>
      <h1>Login</h1>
      <div
        style={{
          display: 'flex',
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'scroll',
        }}
      ></div>
      {errors.noUser}
      <Form
        inputs={inputs}
        onChange={onChanges}
        btnText={'Login'}
        onSubmit={onSubmit}
        onClearAll={onClearAll}
        onBlur={onBlur}
        clearBtn
      />
    </div>
  );
};

export default Login;
