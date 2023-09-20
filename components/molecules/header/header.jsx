import styles from "./header.module.css";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}> Book It</h1>
        <div className={styles.filtersBox}>
          <select
            name=""
            id=""
            className={`${styles.filtersBox__country} ${styles.input}`}
          >
            <option value="All country">All country</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>

          <input
            type="date"
            className={`${styles.filtersBox__input} ${styles.input}`}
          />
          <input
            type="date"
            className={`${styles.filtersBox__input} ${styles.input}`}
          />
          <select
            name=""
            id=""
            className={`${styles.filtersBox__input} ${styles.input}`}
          >
            <option value="All prices">All prices</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="Chile">$$$</option>
            <option value="Uruguay">$$$$</option>
          </select>
                    <select
            name=""
            id=""
            className={`${styles.filtersBox__input} ${styles.input}`}
          >
            <option value="All sizes">All sizes</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </header>
    </>
  );
};
