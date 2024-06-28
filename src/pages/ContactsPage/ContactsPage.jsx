import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMassage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import css from './ContactsPage.module.css'
import ModalWindow from "../../components/ModalWindow/ModalWindow";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h2 className={css.title}>Phonebook </h2>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader>Loading message</Loader>}
        <ContactList />

        {isError && <ErrorMessage />}
        <ModalWindow />
      </div>
    </>
  );
}