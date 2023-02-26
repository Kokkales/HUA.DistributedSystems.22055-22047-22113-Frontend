import classes from './SearchBar.module.css';
import { useState } from 'react';

function SearchBar(props) {
  return (
    <input
      className={classes.searchBar}
      type={props.type}
      placeholder={props.placeholder}
      // value={searchText}
      // value={handleChange()}
    >
      {props.children}
    </input>
  );
}

export default SearchBar;
