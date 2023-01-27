import classes from './Overlay.module.css';
import Card from './Card';

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>{props.children}</div>
    </div>
  );
}

export default Overlay;
