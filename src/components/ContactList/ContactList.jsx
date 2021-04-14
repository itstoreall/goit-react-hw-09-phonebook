import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import ContactItem from './ContactItem';
import s from './Contacts.module.scss';

// Презентационный компонент (без логики)
export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getFilteredContects);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => {
    dispatch(contactsOperations.DELETE(id));
  };

  return (
    <ul className={s.contactList}>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
