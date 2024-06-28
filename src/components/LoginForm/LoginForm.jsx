import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import css from "./LoginForm.module.css"

export default function LoginForm() {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(5, 'Too short')
      .max(18, 'Too long')
      .required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(data => {
        actions.resetForm();
        toast.success('Login successful!');
      })
      .catch(err => {
        console.error('Login error:', err);
        toast.error(
          'Login failed. Please check your credentials and try again.'
        );
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationControl}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off" className={css.form}>
          <div className={css.container}>
            <div className={css.wrapper}>
              <label />
              Email
              <Field type="email" name="email" className={css.input}/>
              <ErrorMessage name="email" component="span" className={css.error}/>
            </div>
            <div className={css.wrapper}>
              <label />
              Password
              <Field type="password" name="password" className={css.input}/>
              <ErrorMessage name="password" component="span" className={css.error}/>
            </div>
            <button type="submit" disabled={isSubmitting} className={css.button}>
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
