import classes from './DivorceListLayout.module.css';

function DivorceList(props) {
  return <ul className={classes.divorceList}>{props.children}</ul>;
}

export default DivorceList;
