import Card from '../ui/Card';
import InputBox from '../ui/InputBox';
import classes from './LoginForm.module.css';

import { Link } from 'react-router-dom';

function LoginForm(props) {
  return (
    <Card>
      <div className={classes.content}>
        <form className={classes.form}>
          <div className={classes.loginHeader}>
            <h1>Login</h1>
          </div>
          <div className={classes.taxNumberInput}>
            <div>
              <label htmlFor="title">Tax Number</label>
              <InputBox>
                <input
                  type="text"
                  placeholder="e.g 123456"
                  required
                  id="taxNumber"
                />
              </InputBox>
            </div>
          </div>
          <div className={classes.passwordInput}>
            <div>
              <label htmlFor="title">Password</label>
              <InputBox>
                <input type="password" required id="password" />
              </InputBox>
            </div>
          </div>
          <div className={classes.submitBtn}>
            <div>
              <button>Login</button>
            </div>
          </div>
          <div className={classes.registerHereLink}>
            <div>
              <Link to="/">Register Here!</Link>
            </div>
          </div>
          <div className={classes.forgotMyPasswordLink}>
            <div>
              <Link to="/">Forgot My Password!</Link>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default LoginForm;
