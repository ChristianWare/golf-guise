"use client";

import { useState, useEffect } from "react";
import styles from "./Search.module.css";
import SearchIcon from "../../../public/icons/search.svg";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <form className={styles.form} id='search'>
      <div>
        <div className={styles.searchIconContainer}>
          <SearchIcon width={18} height={18} className={styles.icon} />
        </div>
        <input
          type='search'
          id='search'
          name='search'
          placeholder='Search Posts...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.input}
        />
      </div>
      {/* <div className={styles.searchResults}>
        <SearchResults results={searchResults} />
      </div> */}
    </form>
  );
};
export default Search;
