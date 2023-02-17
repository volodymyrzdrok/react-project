import AuthForm from 'components/AuthForm/AuthForm';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/session/sessionOperations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    const { email, username, password } = values;
    dispatch(registerUser({ email, username, password }));
  };
  return <AuthForm authType="register" onSubmitFunc={onSubmit} />;
};

export default RegistrationForm;
