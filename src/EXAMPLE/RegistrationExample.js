import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import s from './reg.module.scss';
import { useFormik } from 'formik';
import { SignupSchema } from '../utils/validation';
import { registerUser } from 'redux/session/sessionOperations';
import { useDispatch } from 'react-redux';
import LogOutExample from './LogOutExample';

const RegistrationExample = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      const { email, username, password } = values;
      dispatch(registerUser({ email, username, password }));
    },
  });

  const { errors, touched } = formik;
  return (
    <>
      <LogOutExample />
      <form action="" className={s.form} onSubmit={formik.handleSubmit}>
        <label>
          <br />
          email
          <p className={s.p}>
            {errors.email && touched.email ? errors.email : null}
          </p>
          <input
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>
        <label>
          <br />
          password
          <p className={s.p}>
            {errors.password && touched.password ? errors.password : null}
          </p>
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <label>
          <br />
          confirm password
          <p className={s.p}>
            {errors.confirmPassword && touched.confirmPassword
              ? errors.confirmPassword
              : null}
          </p>
          <input
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
        </label>
        <label>
          <br />
          first name
          <p className={s.p}>
            {errors.username && touched.username ? errors.username : null}
          </p>
          <input
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
        <br />
        <br />
        <button type="submit">register</button> <br />
        <br />
        <NavLink to={routes.login}>
          <button>login</button>
        </NavLink>
      </form>
    </>
  );
};

export default RegistrationExample;
