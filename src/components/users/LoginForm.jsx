import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './LoginForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import PrimaryLink from '../ui/PrimaryLink';
import SecondaryLink from '../ui/SecondaryLink';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Error from '../ui/ErrorNotification';
import ErrorNotification from '../ui/ErrorNotification';

function LoginForm(props) {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false, '');

  function taxNumberOnChangeHandler(event) {
    const value = event.target.value;
    setTaxNumber(value);
  }
  function passwordOnChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function LoginHandler(event) {
    console.log('Tax Number: ' + taxNumber);
    async function login() {
      event.preventDefault();
      console.log('Login button clicked');
      console.log('Password: ' + password);
      try {
        //todo change the path
        const response = await axios.post(
          'http://localhost:8887/api/v1/auth/authenticate',
          {
            taxNumber,
            password,
          },
          {
            headers: 'Access-Control-Allow-Origin',
            withCredentials: 'true',
            // Content_Type: 'application/x-www-form-urlencoded',
          }
        );
        const token = response.data.token;
        // const other = response.data;
        localStorage.setItem('jwtToken', token);
        history.push('/user/profile');
        navigate('/user/profile');
        // You'll need to set up routing for this.
      } catch (error) {
        console.error('Login failed', error);
        setIsError(true, error);
      }
    }
    login();
  }
  // console.log(taxNumber);
  // function LoginHandler(event) {
  // }

  return (
    <Card>
      <form className={classes.loginForm}>
        <div className={classes.loginHeader}>
          <h1>Login</h1>
        </div>
        <div className={classes.taxNumberInput}>
          <TextField
            labelHtmlFor="taxNumber"
            labelText="Tax Number"
            inputType="text"
            inputPlaceholder="e.g 123456"
            onChange={taxNumberOnChangeHandler}
          ></TextField>
        </div>
        <div className={classes.passwordInput}>
          <TextField
            labelHtmlFor="password"
            labelText="Password"
            inputType="password"
            inputPlaceholder=""
            onChange={passwordOnChangeHandler}
          ></TextField>
        </div>
        <div className={classes.submitBtn}>
          <PrimaryButton name="login" onClick={LoginHandler} />
        </div>
        <div className={classes.registerHereLink}>
          <PrimaryLink linkTo="/register" text="Register Here!" />
        </div>
        <div className={classes.forgotMyPasswordLink}>
          <SecondaryLink linkTo="/" text="Forgot My Password" />
        </div>
      </form>
      {isError && <ErrorNotification message="Wrong Credentials" />}
    </Card>
  );
}

export default LoginForm;
