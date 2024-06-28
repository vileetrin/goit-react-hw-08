import css from './Contact.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';

import { useDispatch } from 'react-redux';

import { openModal } from '../../redux/modal/slice';
import { changeContact } from '../../redux/contacts/operations';
import { contactFormSchema } from '../ContactForm/ContactForm';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(openModal(id));
  };

  const handleChange = values => {
    const { name, number } = values;
    dispatch(changeContact({ id, name, number }))
      .unwrap()
      .then(() => {
        toast.success('The contact has been changed', {
          style: { background: 'white', color: 'black' },
          position: 'top-center',
        });
      })
      .catch(() => {
        toast('Was error, please try again');
      });
  };

  const initialContact = {
    name: name,
    number: number,
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleChange}
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <div className={css.wrapper}>
            <label htmlFor={name}>Name</label>
            <Field className={css.input} id={name} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.wrapper}>
            <label htmlFor={number}>Number</label>
            <Field className={css.input} id={number} type="tel" name="number" />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>

          <div className={css.btnBlock}>
            <button className={css.button} type="submit">
              Change
            </button>
            <button className={css.button} type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
