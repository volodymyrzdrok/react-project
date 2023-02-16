import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';

const RegistrationForm = () => {
  const onSubmit = () => {
    console.log('RegistrationForm');
  };
  return (
    <AuthForm
      authType="register"
      buttonText="Register"
      linkText="Log in"
      linkRoute="/login"
      onSubmitFunc={onSubmit}
    />
  );
};

export default RegistrationForm;
