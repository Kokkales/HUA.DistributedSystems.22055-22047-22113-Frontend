import classes from './LawyerNavigation.module.css';
import MainNavigation from './MainNavigation';
import SecondaryLink from '../ui/SecondaryLink';
function LawyerNavigation() {
  return (
    <nav className={classes.navBar}>
      <ul>
        <li>
          <SecondaryLink
            className="linkStyle"
            linkTo="/lawyer"
            text="Statistics"
          />
        </li>
        <li>
          <SecondaryLink linkTo="/lawyer" text="Profile" />
        </li>
        <li>
          <SecondaryLink linkTo="/lawyer" text="New Divorce" />
        </li>
      </ul>
    </nav>
  );
}

export default LawyerNavigation;
