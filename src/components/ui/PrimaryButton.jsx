import classes from './PrimaryButton.module.css';

function PrimaryButton(props) {
  return (
    <div>
      {/* {props.text} */}
      {props.children}
    </div>
  );
}

export default PrimaryButton;
