import css from './Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact ({ contact: { id, name, number } }) {
    const dispatch = useDispatch();
    
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };


    return (
        <div className={css.contactWrapper}>
            <div className={css.contactInfo}>
                <p className={css.contactName}>{name}</p>
                <p className={css.contactNumber}>{number}</p>
            </div>
            <button type='button' className={css.contactBtn} onClick={handleDelete}>Delete</button>
        </div>
    )
}