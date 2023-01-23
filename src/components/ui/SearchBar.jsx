import classes from './SearchBar.module.css';

function SearchBar(props) {
  return (
    <input
      className={classes.searchBar}
      type={props.type}
      placeholder={props.placeholder}
    >
      {props.children}
    </input>
  );
}

export default SearchBar;
