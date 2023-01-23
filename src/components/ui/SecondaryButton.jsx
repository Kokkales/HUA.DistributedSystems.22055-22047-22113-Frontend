import classes from './SecondaryButton.module.css';

function SecondaryButton(props) {
  return (
    <button
      name={props.name}
      className={classes.secondaryButton}
      onClick={props.onClick}
    >
      {props.name}
      {props.children}
    </button>
  );
}

export default SecondaryButton;
