import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import SecondNavigation from './SecondNavigation';
import MainFooter from './MainFooter';
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <SecondNavigation />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </div>
  );
}

export default Layout;
