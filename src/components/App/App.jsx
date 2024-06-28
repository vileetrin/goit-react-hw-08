import css from './App.module.css';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/selectors';
import ErrorMessage from '../ErrorMassage/ErrorMessage';
import Loader from '../Loader/Loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.phonebookWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && <Loader>Loading message</Loader>}
      {isError && <ErrorMessage />}
    </div>
  );
}

export default App;
