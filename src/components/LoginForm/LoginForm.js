import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';

const LoginForm = () => {
  const onSubmit = () => {
    console.log('LoginForm');
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
