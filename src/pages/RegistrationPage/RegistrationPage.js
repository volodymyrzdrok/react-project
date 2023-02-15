import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthError, selectAuthError } from 'redux/session/sessionSlice';
import RegistrationExample from '../../EXAMPLE/RegistrationExample';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const errorAuth = useSelector(selectAuthError);

  useEffect(() => {
    if (errorAuth === 'Request failed with status code 409') {
      toast.warning('User is already logged', settingAlert());
      dispatch(resetAuthError());
    }
  }, [errorAuth, dispatch]);

  return (
    <div>
      <RegistrationExample />
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
