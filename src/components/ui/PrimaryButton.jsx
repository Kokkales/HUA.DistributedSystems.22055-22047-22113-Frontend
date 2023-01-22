import classes from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button
      name={props.name}
      className={classes.primaryButton}
      onClick={props.onClick}
    >
      {props.name}
      {props.children}
    </button>
  );
}

export default PrimaryButton;
