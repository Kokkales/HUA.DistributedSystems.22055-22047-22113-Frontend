import classes from './SecondaryLink.module.css';
import { Link } from 'react-router-dom';

// linkTo='/' text="Forgot My Password"/
function SecondaryLink(props) {
  return (
    <Link className={classes.secondaryLink} to={props.linkTo}>
      {props.text}
      {props.children}
    </Link>
  );
}

export default SecondaryLink;
