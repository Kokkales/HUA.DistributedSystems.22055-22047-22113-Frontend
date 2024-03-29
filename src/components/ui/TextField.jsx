import classes from './TextField.module.css';

function TextField(props) {
  console.log(props.isDisabled);
  return (
    <div>
      <label htmlFor={props.labelHtmlFor}>{props.labelText}</label>
      <input
        className={classes.inputTextBox}
        type={props.inputType}
        // placeholder={props.value}
        required
        onBlur={props.onBlur}
        value={props.value}
        // disabled={props.isDisabled}
        onChange={props.onChange}
      ></input>
      {props.children}
    </div>
  );
}

export default TextField;
