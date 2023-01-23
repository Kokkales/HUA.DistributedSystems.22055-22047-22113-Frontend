import classes from './SecondNavigation.module.css';
import PageLink from '../ui/PageLink';

function SecondNavigation() {
  return (
    <nav className={classes.navBar}>
      <ul>
        <li>
          <PageLink
            className="linkStyle"
            linkTo="/lawyer/workspace" //variable in the place of spouse
            text="Workspace"
          />
        </li>
        <li>
          <PageLink linkTo="/user/profile" text="Profile" />
        </li>
      </ul>
    </nav>
  );
}

export default SecondNavigation;
