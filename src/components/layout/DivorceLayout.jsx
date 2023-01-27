import classes from './DivorceLayout.module.css';

function DivorceLayout(props) {
  return <main className={classes.divorceLayout}>{props.children}</main>;
}

export default DivorceLayout;
