import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import SecondNavigation from './SecondNavigation';
import MainFooter from './MainFooter';
import { useState, useEffect } from 'react';
function Layout(props) {
  // const { userChosenRole } = useParams();
  // const [userRole, setUserRole] = useState('');
  // useEffect(() => {
  // setUserRole(props.userRole);
  // }, []);
  console.log('LAYOUT: ' + props.userRole);
  // consy;
  return (
    <div>
      <MainNavigation />
      <SecondNavigation userRole={localStorage.getItem('userRole')} />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </div>
  );
}

export default Layout;
