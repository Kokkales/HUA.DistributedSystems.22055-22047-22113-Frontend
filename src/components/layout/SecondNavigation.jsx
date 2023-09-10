import classes from './SecondNavigation.module.css';
import PageLink from '../ui/PageLink';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SecondNavigation(props) {
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
  }, []);
  return (
    <nav className={classes.navBar}>
      <ul>
        <li>
          <PageLink
            className="linkStyle"
            linkTo={'/' + props.userRole + '/workspace'} //variable in the place of spouse
            text="Workspace"
            userRole={props.userRole}
          />
        </li>
        <li>
          <PageLink linkTo="/profile" text="Profile" />
        </li>
      </ul>
    </nav>
  );
}

export default SecondNavigation;
