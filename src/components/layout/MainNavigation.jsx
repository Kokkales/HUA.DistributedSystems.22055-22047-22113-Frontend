import PrimaryLink from '../ui/PrimaryLink';
import classes from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>Divorce Service</div>
      <ul>
        <li>
          <PrimaryLink linkTo="/" text="Logout" />
        </li>
      </ul>
      {props.children}
    </nav>
  );
}

export default MainNavigation;
