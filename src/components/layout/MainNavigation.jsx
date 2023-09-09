import PrimaryButton from '../ui/PrimaryButton';
import PrimaryLink from '../ui/PrimaryLink';
import classes from './MainNavigation.module.css';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';

function MainNavigation(props) {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    history.push('/');
    navigate('/');
  };
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>Divorce Service</div>
      <ul>
        <li>
          <PrimaryButton name="Logout" onClick={handleLogout} />
        </li>
      </ul>
      {props.children}
    </nav>
  );
}

export default MainNavigation;
