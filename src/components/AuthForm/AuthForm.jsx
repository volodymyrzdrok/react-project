import style from './AuthForm.module.scss';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import IconEmail from 'assets/icons/IconEmail/IconEmail';
import IconPassword from 'assets/icons/IconPassword/IconPassword';
import IconName from 'assets/icons/IconName/IconName';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';

import wallet40 from '../../assets/images/Wallet40.png';
import wallet30 from '../../assets/images/Wallet30.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#24CCA7',
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red',
          borderRadius: '20px',
        },
      },
    },
  },
});

const AuthForm = ({
  buttonText,
  linkText,
  linkRoute,
  onSubmitFunc,
  authType,
}) => {
  const formik = useFormik({
    initialValues:
      authType === 'register'
        ? {
            email: '',
            password: '',
            confirmPwd: '',
            firstName: '',
          }
        : {
            email: '',
            password: '',
          },

    validationSchema: SignupSchema(authType),
    onSubmit: values => {
      onSubmitFunc(values);
    },
  });

  const { errors, touched } = formik;
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
          <div className={style.hello}>
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
            <ThemeProvider theme={theme}>
              <LinearProgress
                className={style.progressBar}
                variant="determinate"
                color="primary"
                // value={progressValue}
                value={50}
              />
            </ThemeProvider>
          </div>
        )}

        {authType === 'register' && (
          <div className={style.formInputWrapper}>
            <input
              className={style.input}
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />

            <IconName className={style.formIcon} />
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className={style.formInputMistake}>
                {formik.errors.firstName}
              </span>
            ) : null}
          </div>
        )}

        <button className={style.mainBtn} type="submit">
          {buttonText}
        </button>
        <Link className={style.subBtn} to={`${linkRoute}`}>
          {linkText}
        </Link>
      </form>
    </div>
  );
};

function SignupSchema(authType) {
  const defaultValidate = {
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
        '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        'must be a valid email'
      )
      .required(),
    password: Yup.string().min(8, 'Too Short!').max(50, 'Too Long!').required(),
  };

  return Yup.object().shape(
    authType === 'register'
      ? {
          firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .matches(
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              'only letters!'
            )
            .required(),
          confirmPwd: Yup.string()
            .min(8, 'Too Short!')
            .max(50, 'Too Long!')
            .required(),

          ...defaultValidate,
        }
      : defaultValidate
  );
}

export default AuthForm;
