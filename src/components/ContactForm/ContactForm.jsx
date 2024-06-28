import css from './ContactForm.module.css';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from "yup";

import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";


const contactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.number().required("Required")
});

export default function ContactForm () {
    const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    };
    dispatch(addContact(newContact));
    actions.resetForm();
    };
    
    return (<div>
        <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit} validationSchema={contactFormSchema}>
            <Form className={css.form}>
                <div className={css.formInfoWrapper}>
                    <label htmlFor="username">Name</label>
                    <Field type='text' name='name' id='username'className={css.formInput}></Field>
                    <ErrorMessage name='name' component='span' className={css.error}/>
                </div>
                <div className={css.formInfoWrapper}>
                    <label htmlFor="number">Phone number</label>
                    <Field type='tel' name='number' id='number' className={css.formInput}></Field>
                    <ErrorMessage name='number' component='span' className={css.error}/>
                </div>
                
                <button type='submit' className={css.formButton}>Add contact</button>
            </Form>
        </Formik>
    </div>)
}