import classes from './TextField.module.css';

function TextField(props) {
  // <TextField labelHtmlFor="password" labelText="Password" inputType="password" inputPlaceholder=""></TextField>
  return (
    <div>
      <label htmlFor={props.labelHtmlFor}>{props.labelText}</label>
      <input
        className={classes.inputTextBox}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        required
        onBlur={props.onBlur}
      ></input>
      {props.children}
    </div>
  );
}

export default TextField;
