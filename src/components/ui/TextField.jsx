import classes from './TextField.module.css';

function TextField(props) {
  return (
    <div>
      <label htmlFor={props.labelHtmlFor}>{props.labelText}</label>
      <input
        className={classes.inputTextBox}
        type={props.inputType}
        placeholder={props.inputPlaceholder}
        required
        onBlur={props.onBlur}
        value={props.value}
        disabled={props.isDisabled ? 'disabled' : ''}
        onChange={props.onChange}
      ></input>
      {props.children}
    </div>
  );
}

export default TextField;
