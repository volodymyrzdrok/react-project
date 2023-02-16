// import LoginExample from '../../EXAMPLE/LoginExample';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAuthError, selectAuthError } from 'redux/session/sessionSlice';

import { ToastContainer, toast } from 'react-toastify';
import { settingAlert } from 'utils/settingAlert';
import LoginForm from 'components/LoginForm/LoginForm';

import s from '../LoginPage/LoginPage.module.scss';
import logImgDesktop from '../../assets/images/log-image-desk.webp';
import logImgTablet from '../../assets/images/log-image-tab.webp';

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
      <div className={s.background}>
        <div className={s.backdrop}></div>
        <div className="container">
          <div className={s.contentWrapper}>
            <div className={s.imgWrapper}>
              <picture className={s.mainImg}>
                <source media="(min-width: 1280px)" srcSet={logImgDesktop} />
                <source media="(min-width: 768px)" srcSet={logImgTablet} />

                <img src={logImgTablet} alt="wallet" />
              </picture>
            </div>

            <div className={s.formWrapper}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      {/* <LoginForm /> */}
      {/* <LoginExample /> */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
