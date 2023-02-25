import classes from './DivorceListLayout.module.css';

function DivorceListLayout(props) {
  return <ul className={classes.divorceList}>{props.children}</ul>;
}

export default DivorceListLayout;
