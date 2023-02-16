import LoginExample from '../../EXAMPLE/LoginExample';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthError, selectAuthError } from 'redux/session/sessionSlice';

import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);

  useEffect(() => {
    if (errorAuth === 'Request failed with status code 403') {
      toast.warning('Invalid Email or Password', settingAlert());
      dispatch(resetAuthError());
    }
  }, [errorAuth, dispatch]);
  return (
    <div>
      <LoginForm />;
      <LoginExample />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
