import style from './AuthForm.module.scss';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import IconEmail from 'assets/icons/IconEmail/IconEmail';
import IconPassword from 'assets/icons/IconPassword/IconPassword';
import IconName from 'assets/icons/IconName/IconName';
import { ThemeProvider } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import wallet40 from '../../assets/images/Wallet40.png';
import wallet30 from '../../assets/images/Wallet30.png';
import { SigupLogSchema } from 'utils/validation';
import themeGreen from 'assets/themes/themeProgressBar';
import { useEffect, useState } from 'react';
import themeRed from 'assets/themes/themeProgressBarRed';

const AuthForm = ({ onSubmitFunc, authType }) => {
  const formik = useFormik({
    initialValues:
      authType === 'register'
        ? {
            email: '',
            password: '',
            confirmPwd: '',
            username: '',
          }
        : {
            email: '',
            password: '',
          },

    validationSchema: SigupLogSchema(authType),
    onSubmit: values => {
      onSubmitFunc(values);
    },
  });

  const [valueProgress, setValueProgress] = useState(0);
  useEffect(() => {
    if (formik.values.confirmPwd.length === 0) {
      setValueProgress(0.01);
    } else if (
      formik.values.password === formik.values.confirmPwd &&
      formik.values.password.length !== 0
    ) {
      setValueProgress(100);
    } else if (
      formik.values.password.startsWith(formik.values.confirmPwd) &&
      formik.values.password.length !== 0
    ) {
      setValueProgress(
        (formik.values.confirmPwd.length * 100) / formik.values.password.length
      );
    } else {
      setValueProgress(0);
    }
  }, [valueProgress, formik.values.confirmPwd, formik.values.password]);

  return (
    <div className={style.formContainer}>
      <div className={style.formTitleContainer}>
        <picture className={style.logoIcon}>
          <source media="(min-width: 769px)" srcSet={wallet40} />
          <source media="(max-width: 768px)" srcSet={wallet30} />

          <img src={wallet40} alt="wallet" />
        </picture>
        <h2 className={style.formTitle}>Wallet</h2>
      </div>

      <form className={style.form} onSubmit={formik.handleSubmit}>
        <div className={style.formInputWrapper}>
          <input
            className={style.input}
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          <IconEmail className={style.formIcon} />

          {formik.touched.email && formik.errors.email ? (
            <span className={style.formInputMistake}>
              {formik.errors.email}
            </span>
          ) : null}
        </div>

        <div className={style.formInputWrapper}>
          <input
            className={style.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <IconPassword className={style.formIcon} />

          {formik.touched.password && formik.errors.password ? (
            <span className={style.formInputMistake}>
              {formik.errors.password}
            </span>
          ) : null}
        </div>

        {authType === 'register' && (
          <div>
            <div className={style.formInputWrapper}>
              <input
                className={style.input}
                name="confirmPwd"
                type="password"
                placeholder="Confirm password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPwd}
              />

              <IconPassword className={style.formIcon} />

              {formik.touched.confirmPwd && formik.errors.confirmPwd ? (
                <span className={style.formInputMistake}>
                  {formik.errors.confirmPwd}
                </span>
              ) : null}
            </div>
            <ThemeProvider theme={valueProgress === 0 ? themeRed : themeGreen}>
              <LinearProgress
                className={style.progressBar}
                variant="determinate"
                color="primary"
                value={valueProgress}
              />
            </ThemeProvider>
          </div>
        )}

        {authType === 'register' && (
          <div className={style.formInputWrapper}>
            <input
              className={style.input}
              name="username"
              type="text"
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            <IconName className={style.formIcon} />
            {formik.touched.username && formik.errors.username ? (
              <span className={style.formInputMistake}>
                {formik.errors.username}
              </span>
            ) : null}
          </div>
        )}

        <button className={style.mainBtn} type="submit">
          {authType === 'register' ? 'Register' : 'Log in'}
        </button>
        <Link to={authType === 'register' ? '/login' : '/register'}>
          <button className={style.subBtn}>
            {authType === 'register' ? 'Log in' : 'Register'}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;
