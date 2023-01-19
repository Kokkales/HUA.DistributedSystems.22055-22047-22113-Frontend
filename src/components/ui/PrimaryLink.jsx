import classes from './PrimaryLink.module.css';
import { Link } from 'react-router-dom';

// linkTo='/' text="Forgot My Password"/
function PrimaryLink(props) {
  return (
    <Link className={classes.primaryLink} to={props.linkTo}>
      {props.text}
      {props.children}
    </Link>
  );
}

export default PrimaryLink;
