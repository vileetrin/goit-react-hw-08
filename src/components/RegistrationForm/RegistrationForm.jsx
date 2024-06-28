import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const validationControl = Yup.object().shape({
    email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(18, "Too long")
      .required("Required"),
    name: Yup.string()
      .required("Required")
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => {
        actions.resetForm();
        toast.success("Registration successful!");
      })
      .catch((err) => {
        console.error("Registration error:", err);
        if (err.code === 11000) {
          toast.error("This email is already registered. Please use a different email.");
        } else {
          toast.error("Registration failed. Please try again.");
        }
        actions.setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationControl}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off" className={css.form}>
        <div className={css.container}>
          <div className={css.wrapper}>
            <label>Username</label>
            <Field type="text" name="name" className={css.input} />
          </div>
          <div className={css.wrapper}>
            <label>Email</label>
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.wrapper}>
            <label>Password</label>
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="span" className={css.error} />
          </div>
          <button type="submit" className={css.button}>
            Register
          </button>
        </div>
      </Form>
      </Formik>
      );   
}