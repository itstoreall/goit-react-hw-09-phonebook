import ContactItem from './ContactItem';
import s from './Contacts.module.scss';

// Презентационный компонент (без логики)
const ContactList = ({ contacts, onDeleteContact }) => (
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

export default ContactList;
