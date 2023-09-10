import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './RegistrationForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

// import { Link } from 'react-router-dom';
import PrimaryLink from '../ui/PrimaryLink';
import SecondaryLink from '../ui/SecondaryLink';

function RegistrationForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [identityCard, setIdentityCard] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem('jwtToken');
  const [isError, setIsError] = useState(false);
  const [isSuccesfull, setIsSuccesfull] = useState(false);
  // const navigate = useNavigate();

  async function signUp() {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const newUser = {
      email: email,
      password: password,
      taxNumber: taxNumber,
      identityCard: identityCard,
      phoneNumber: phoneNumber,
      firstname: firstname,
      lastname: lastname,
      role: role,
    };
    console.log('Register button clicked');
    console.log('Password: ' + newUser.firstname);
    try {
      //todo change the path
      const response = await axios.post(
        'http://localhost:8887/api/v1/auth/register',
        {
          email: email,
          password: password,
          taxNumber: taxNumber,
          identityCardNumber: identityCard,
          phoneNumber: phoneNumber,
          firstName: firstname,
          lastName: lastname,
          role: role,
        },
        {
          headers: 'Access-Control-Allow-Origin',
          withCredentials: 'true',
          // Content_Type: 'application/x-www-form-urlencoded',
        }
      );
      const token = response.data.token;
      navigate('/');
    } catch (error) {
      console.log('Register: ', error);
    }
  }
  function RegistrationHandler(event) {
    event.preventDefault();
    console.log('Registration button clicked');
    signUp();
  }
  function taxNumOnChangeHandler(event) {
    const value = event.target.value;
    setTaxNumber(value);
  }
  function identityCardOnChangeHandler(event) {
    const value = event.target.value;
    setIdentityCard(value);
  }
  function firstNameOnChangeHandler(event) {
    const value = event.target.value;
    setFirstName(value);
  }
  function lastNameOnChangeHandler(event) {
    const value = event.target.value;
    setLastName(value);
  }
  function emailOnChangeHandler(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function phoneNumberOnChangeHandler(event) {
    const value = event.target.value;
    setPhoneNumber(value);
  }
  function passwordOnChangeHandler(event) {
    const value = event.target.value;
    setPassword(value);
  }
  function confirmPasswordOnChangeHandler(event) {
    const value = event.target.value;
    setConfirmPassword(value);
  }
  function roleOnChangeHandler(event) {
    const value = event.target.value;
    setRole(value);
  }
  return (
    <Card>
      <div className={classes.content}>
        <form className={classes.form}>
          <div className={classes.loginHeader}>
            <h1>Register</h1>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="taxNumber"
              labelText="Tax Number"
              inputType="text"
              inputPlaceholder="e.g 123456"
              onChange={taxNumOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="identityCardNumber"
              labelText="Identiy Card Number"
              inputType="text"
              inputPlaceholder="e.g AD4365"
              onChange={identityCardOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="firstName"
              labelText="First Name"
              inputType="text"
              inputPlaceholder="e.g Katerina"
              onChange={firstNameOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="lastName"
              labelText="Last Name"
              inputType="text"
              inputPlaceholder="e.g Konstantidi"
              onChange={lastNameOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="text"
              inputPlaceholder=" something@xxxx.xxx"
              onChange={emailOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="phoneNumber"
              labelText="Phone Number"
              inputType="tel"
              inputPlaceholder="e.g 6985637584"
              onChange={phoneNumberOnChangeHandler}
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
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="passwordConfirmation"
              labelText="Confirm Password"
              inputType="password"
              inputPlaceholder=""
              onChange={confirmPasswordOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="role"
              labelText="Role"
              inputType="text"
              inputPlaceholder=""
              onChange={roleOnChangeHandler}
            ></TextField>
          </div>
          <div className={classes.submitBtn}>
            {/* <PrimaryButton text="Register" /> */}
            <PrimaryButton name="Register" onClick={RegistrationHandler} />
          </div>
          <div className={classes.registerHereLink}>
            <PrimaryLink linkTo="/" text="Already Registered? Login Here!" />
          </div>
        </form>
      </div>
    </Card>
  );
}

export default RegistrationForm;
