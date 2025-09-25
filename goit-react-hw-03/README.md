# Phonebook Application

A React-based phonebook application built with Vite, Formik, and CSS Modules.

## Features

- **Add Contacts**: Add new contacts with name and phone number
- **Search Contacts**: Filter contacts by name (case-insensitive)
- **Delete Contacts**: Remove contacts from the list
- **Persistent Storage**: Contacts are saved to localStorage
- **Form Validation**: Input validation using Formik and Yup
- **Responsive Design**: Modern UI with CSS Modules

## Components

- `App`: Main application component with state management
- `ContactForm`: Form for adding new contacts with validation
- `SearchBox`: Search input for filtering contacts
- `ContactList`: Container for displaying contacts
- `Contact`: Individual contact item with delete functionality

## Technologies Used

- React 19
- Vite
- Formik (form management)
- Yup (validation)
- nanoid (ID generation)
- CSS Modules
- Prettier (code formatting)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── ContactForm/
│   │   ├── ContactForm.jsx
│   │   └── ContactForm.module.css
│   ├── ContactList/
│   │   ├── ContactList.jsx
│   │   └── ContactList.module.css
│   └── SearchBox/
│       ├── SearchBox.jsx
│       └── SearchBox.module.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
