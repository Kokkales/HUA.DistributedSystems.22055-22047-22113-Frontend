import classes from './PageLink.module.css';
import { Link } from 'react-router-dom';

function PageLink(props) {
  return (
    <Link className={classes.pageLink} to={props.linkTo}>
      {props.text}
      {props.children}
    </Link>
  );
}

export default PageLink;
