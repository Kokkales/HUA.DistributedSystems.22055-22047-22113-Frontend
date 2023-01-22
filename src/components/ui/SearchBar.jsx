import classes from './SearchBar.module.css';

function SearchBar(props) {
  return <div className={classes.searchBar}>{props.children}</div>;
}

export default SearchBar;
