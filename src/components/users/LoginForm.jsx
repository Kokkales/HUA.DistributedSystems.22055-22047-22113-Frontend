import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './LoginForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import PrimaryLink from '../ui/PrimaryLink';
import SecondaryLink from '../ui/SecondaryLink';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  function loginHandler(event) {
    event.preventDefault();
    console.log('Login button clicked');
    console.log('Request to server for auth if true then link to profile');
    <Link to="/register">link</Link>;
  }
  return (
    <Card>
      <div className={classes.content}>
        <form className={classes.form}>
          <div className={classes.loginHeader}>
            <h1>Login</h1>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder="e.g 123456"
            ></TextField>
          </div>
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="password"
              labelText="Password"
              inputType="password"
              inputPlaceholder=""
            ></TextField>
          </div>
          <div className={classes.submitBtn}>
            {/* <PrimaryButton text="Login" onClick={handler} /> */}
            <PrimaryButton>
              <button onClick={loginHandler}>login</button>
            </PrimaryButton>
          </div>
          <div className={classes.registerHereLink}>
            <PrimaryLink linkTo="/register" text="Register Here!" />
          </div>
          <div className={classes.forgotMyPasswordLink}>
            <SecondaryLink linkTo="/" text="Forgot My Password" />
          </div>
        </form>
      </div>
    </Card>
  );
}

export default LoginForm;
