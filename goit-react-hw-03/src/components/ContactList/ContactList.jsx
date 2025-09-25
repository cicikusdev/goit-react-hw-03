import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return <div className={styles.emptyMessage}>No contacts found</div>;
  }

  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
