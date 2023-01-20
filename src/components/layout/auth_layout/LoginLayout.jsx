import classes from './LoginLayout.module.css';

function LoginLayout(props) {
  return <main className={classes.main}>{props.children}</main>;
}

export default LoginLayout;
