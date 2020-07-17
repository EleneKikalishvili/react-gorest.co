import React from "react";

import styles from "./search.module.css";

const Search = ({ searchChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchStyles}
        type="search"
        placeholder="search by firstname"
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;
