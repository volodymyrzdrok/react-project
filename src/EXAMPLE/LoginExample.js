import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from 'utils/routes';
import s from './reg.module.scss';
import { useFormik } from 'formik';
import { SigninSchema } from '../utils/validation';
import { loginUser } from 'redux/session/sessionOperations';
import { useDispatch } from 'react-redux';
import LogOutExample from './LogOutExample';

const LoginExample = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: values => {
      const { email, password } = values;
      dispatch(loginUser({ email, password }));
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
        <br />
        <br />
        <button type="submit">login</button> <br />
        <br />
        <NavLink to={routes.register}>
          <button>register</button>
        </NavLink>
      </form>
    </>
  );
};

export default LoginExample;
