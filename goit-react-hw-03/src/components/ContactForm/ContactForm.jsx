import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be at most 50 characters')
    .required('Number is required'),
});

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Add Contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className={styles.input}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="number" className={styles.label}>
              Number
            </label>
            <Field
              id="number"
              name="number"
              type="text"
              className={styles.input}
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
