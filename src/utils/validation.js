import * as Yup from 'yup';

export const SigupLogSchema = authType => {
  const defaultValidate = {
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(
        '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
        'must be a valid email'
      )
      .required(),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(12, 'Password must be 6-12 characters')
      .required(),
  };

  return Yup.object().shape(
    authType === 'register'
      ? {
          firstName: Yup.string()
            .min(1, 'Too Short!')
            .max(12, 'Too Long!(be at least 12 letters)')
            .matches(
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
              'only letters!'
            )
            .required('Required'),
          confirmPwd: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required(),
          ...defaultValidate,
        }
      : defaultValidate
  );
};

// export const SignupSchema = Yup.object().shape({
//   email: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', 'must be a valid email')
//     .required(),
//   password: Yup.string()
//     .min(6, 'Too Short!')
//     .max(12, 'TPassword must be 6-12 characters')
//     .required(),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required(),
//   username: Yup.string()
//     .min(1, 'Too Short!')
//     .max(12, 'Too Long!(be at least 12 letters)')
//     .matches(
//       "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
//       'only letters!'
//     )
//     .required('Required'),
// });

// export const SigninSchema = Yup.object().shape({
//   email: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$', 'must be a valid email')
//     .required(),
//   password: Yup.string()
//     .min(6, 'Too Short!')
//     .max(12, 'TPassword must be 6-12 characters')
//     .required(),
// });
