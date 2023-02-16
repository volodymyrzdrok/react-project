import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/session/sessionOperations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { email, password } = values;
    dispatch(loginUser({ email, password }));
  };

  return (
    <AuthForm
      authType="login"
      buttonText="Log in"
      linkText="Register"
      linkRoute="/register"
      onSubmitFunc={onSubmit}
    />
  );
};

export default LoginForm;
