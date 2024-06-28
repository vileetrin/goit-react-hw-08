import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});


export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast('The contact has been added', {
          style: { background: '#a477e0' },
          position: 'top-center',
        });
      })
      .catch(() => {
        toast('Was error, please try again', {
          style: { background: '#fb30c8' },
          containerStyle: {
            top: 150,
            left: 20,
            bottom: 20,
            right: 20,
          },
        });
      });

    actions.resetForm();
  };

    
  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={contactFormSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
          <div className={css.wrapper}>
            <label htmlFor="username">Name</label>
            <Field
              type="text"
              name="name"
              id="username"
              className={css.input}
            ></Field>
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.wrapper}>
            <label htmlFor="number">Phone number</label>
            <Field
              type="tel"
              name="number"
              id="number"
              className={css.input}
            ></Field>
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.button}>
            Add contact
            </button>
            </div>
        </Form>
      </Formik>
    </div>
  );
}
