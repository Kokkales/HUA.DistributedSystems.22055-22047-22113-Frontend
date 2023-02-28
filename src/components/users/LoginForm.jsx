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

function LoginForm(props) {
  const navigate = useNavigate();

  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function LoginHandler(event) {
    event.preventDefault();
    console.log('Login button clicked');
    console.log('Tax Number: ' + taxNumber);
    console.log('Password: ' + password);
    //take the data and send request for authentication
    //save the tax number and the faculty
    //depending on the faculty render the apprpopriate page
    // signIn();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taxNumber: taxNumber, password: password }),
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status == 500) {
          alert('user with this data bot found');
        } else if (data.status == 400) {
        } else {
          console.log(data);
          navigate('/chooseRegister', { state: data });
        }
      });
  }

  function taxNumberOnChangeHandler(event) {
    const value = event.target.value;
    setTaxNumber(value);
  }
  function passwordOnChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }
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
    </Card>
  );
}

export default LoginForm;
