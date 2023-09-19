import classes from './SecondNavigation.module.css';
import PageLink from '../ui/PageLink';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function SecondNavigation(props) {
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  // const [userRole, setUserRole] = useState();
  // useEffect(() => {
  //   setUserRole(props.userRole);
  // }, []);
  return (
    <nav className={classes.navBar}>
      <ul>
        <li>
          <PageLink
            className="linkStyle"
            linkTo={'/' + localStorage.getItem('userRole') + '/workspace'} //TODO Instead of props.userRole I will use the navigation parameter from choose registry
            text="Workspace"
          />
        </li>
        <li>
          <PageLink
            linkTo={'/profile/' + localStorage.getItem('userRole')}
            text="Profile"
          />
        </li>
      </ul>
    </nav>
  );
}

export default SecondNavigation;
