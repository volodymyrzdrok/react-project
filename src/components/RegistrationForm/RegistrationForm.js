import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/session/sessionOperations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { email, firstName, password } = values;
    const username = firstName;
    dispatch(registerUser({ email, username, password }));
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
