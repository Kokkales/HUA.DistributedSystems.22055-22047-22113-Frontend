import classes from './Modal.module.css';
import Card from './Card';

function Modal(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

export default Modal;
