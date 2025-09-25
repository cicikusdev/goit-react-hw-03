import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
