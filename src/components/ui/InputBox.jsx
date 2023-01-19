import classes from './InputBox.module.css';

function InputBox(props) {
  return <div className={classes.inputBox}>{props.children}</div>;
}

export default InputBox;
