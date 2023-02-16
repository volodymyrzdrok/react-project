import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthError, selectAuthError } from 'redux/session/sessionSlice';
// import RegistrationExample from '../../EXAMPLE/RegistrationExample';
import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

import s from '../LoginPage/LoginPage.module.scss';

import regImgDesktop from '../../assets/images/reg-image-desk.webp';
import regImgTablet from '../../assets/images/reg-image-tab.webp';

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
      <div className={s.background}>
        <div className={s.backdrop}></div>
        <div className="container">
          <div className={s.contentWrapper}>
            <div className={s.illustrationWrapper}>
              <picture className={s.mainImg}>
                <source media="(min-width: 1280px)" srcSet={regImgDesktop} />
                <source media="(min-width: 768px)" srcSet={regImgTablet} />

                <img src={regImgTablet} alt="wallet" />
              </picture>
              <h2 className={s.illustrationText}>Finance App</h2>
            </div>

            <div className={s.formWrapper}>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
      {/* <RegistrationForm /> */}
      {/* <RegistrationExample /> */}
      <ToastContainer />
    </div>
  );
};

export default RegistrationPage;
