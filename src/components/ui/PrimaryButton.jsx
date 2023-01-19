import classes from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <button>
      {props.text}
      {props.children}
    </button>
  );
}

export default PrimaryButton;
