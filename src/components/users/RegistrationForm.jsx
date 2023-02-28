import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './RegistrationForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [isLoading, setIsLoading] = useState(false);

  function RegistrationHandler(event) {
    event.preventDefault();
    console.log('Registration button clicked');
    // signUp();
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
