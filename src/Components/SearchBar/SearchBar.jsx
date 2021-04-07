import styles from '../SearchBar/Searchbar.module.css';
const SearchBar = ({ onSubmit }) => (
  <header className={styles.search_bar}>
    <form className={styles.searchForm}>
      <button type="submit" className={styles.searchForm_button}>
        <span className={styles.searchForm_button_label}>Search</span>
      </button>

      <input
        className={styles.searchForm_input}
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);
export default SearchBar;
