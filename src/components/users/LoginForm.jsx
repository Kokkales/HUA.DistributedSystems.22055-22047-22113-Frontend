import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './LoginForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import PrimaryLink from '../ui/PrimaryLink';
import SecondaryLink from '../ui/SecondaryLink';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Error from '../ui/ErrorNotification';
import ErrorNotification from '../ui/ErrorNotification';
import { isVisible } from '@testing-library/user-event/dist/utils';
import SuccesfullMesageNotification from '../ui/SuccesfullMessageNotification';

function LoginForm(props) {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccesfull, setIsSuccesfull] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   // Show the element for 3 seconds
  //   setIsError(false);

  //   // Hide the element after 3 seconds
  //   const timer = setTimeout(() => {
  //     setIsError(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  function taxNumberOnChangeHandler(event) {
    const value = event.target.value;
    setTaxNumber(value);
  }
  function passwordOnChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }
  // if (isError === true) {
  //   setInterval(setIsError(false), 3000);
  // }

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
        history.push('/chooseRegister');
        navigate('/chooseRegister');
        setIsSuccesfull(true);
        const timer = setTimeout(() => {
          setIsSuccesfull(false);
        }, 3000);
        // You'll need to set up routing for this.
        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Login failed', error);
        setIsError(true);
        const timer = setTimeout(() => {
          setIsError(false);
        }, 3000);

        return () => clearTimeout(timer);
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
          {/* <SecondaryLink linkTo="/" text="Forgot My Password" /> */}
        </div>
      </form>
      {isError && <ErrorNotification message="Wrong Credentials" />}
      {isSuccesfull && <SuccesfullMesageNotification message="Welcome!" />}
    </Card>
  );
}

export default LoginForm;
