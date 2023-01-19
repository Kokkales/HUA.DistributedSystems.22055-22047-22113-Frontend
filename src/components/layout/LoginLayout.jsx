import classes from './LoginLayout.module.css';
// import MainNavigation from './MainNavigation';

function Layout(props) {
  return <main className={classes.main}>{props.children}</main>;
}

export default Layout;
