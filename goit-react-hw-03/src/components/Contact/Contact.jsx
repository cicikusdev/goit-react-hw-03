import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <span className={styles.name}>{contact.name}</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(contact.id)}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
