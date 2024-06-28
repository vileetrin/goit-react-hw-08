import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from "react-redux"
import {selectFilteredContacts} from '../../redux/contacts/slice'


export default function ContactList() {
  
const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <>
            <ul className={css.contactsList}>
                {filteredContacts.map((contact) => {
                    return (
                        <li key={contact.id} className={css.contactListItem}>
                            <Contact contact={contact}/>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
