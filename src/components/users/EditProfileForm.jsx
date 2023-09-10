import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './EditProfileForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Overlay from '../ui/Overlay';
import axios from 'axios';

import { useState } from 'react';

function EditProfileForm(props) {
  const isShown = props.isShown;
  const [newEmail, setNewEmail] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');

  async function saveEditHandler(event) {
    console.log(props.data.firstName);
    event.preventDefault();
    //POST changes
    if (newPassword !== newPasswordConfirmation) {
      alert("Passwords don't match");
      return;
    }
    const updatedUser = {
      email: newEmail,
      password: newPassword,
      taxNumber: props.data.taxNumber,
      identityCard: props.data.identityCard,
      phoneNumber: newPhoneNumber,
      firstname: props.data.firstname,
      lastname: props.data.lastname,
      role: props.data.role,
    };
    console.log('Register button clicked');
    console.log('Password: ' + updatedUser.firstname);
    try {
      //todo change the path
      const response = await axios.post(
        'http://localhost:8887/user/edit',
        {
          email: newEmail,
          // password: newPassword,
          taxNumber: props.data.taxNumber,
          identityCardNumber: props.data.identityCardNumber,
          phoneNumber: newPhoneNumber,
          firstName: props.data.firstName,
          lastName: props.data.lastName,
          // role: props.data.role,
        },
        {
          headers: 'Access-Control-Allow-Origin',
          withCredentials: 'true',
          // Content_Type: 'application/x-www-form-urlencoded',
        }
      );
      const token = response.data.token;
      if (isShown) {
        console.log('close the form');
      }
      props.formState(isShown);
      console.log('new data saved - button clicked');
    } catch (error) {
      console.log('Register: ', error);
    }
  }

  function exitEditHandler(event) {
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('close the form');
    }
    props.formState(isShown);
    console.log('exit button clicked');
  }

  function setPhoneNumberInput(event) {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  }
  function setEmailInput(event) {
    console.log(event.target.value);
    setNewEmail(event.target.value);
  }
  function setPasswordInput(event) {
    console.log(event.target.value);
    setNewPassword(event.target.value);
  }
  function setPasswordConfirmationInput(event) {
    console.log(event.target.value);
    setNewPasswordConfirmation(event.target.value);
  }

  return (
    <Overlay className={classes.formPosition}>
      <Card>
        <form className={classes.editForm}>
          <div className={classes.loginHeader}>
            <h1>Edit Profile Form</h1>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="text"
              value={props.data.email}
              // inputPlaceholder=" something@xxxx.xxx"
              onChange={setEmailInput}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="phoneNumber"
              labelText="Phone Number"
              inputType="tel"
              value={props.data.phoneNumber}
              onChange={setPhoneNumberInput}
              // inputPlaceholder="e.g 6985637584"
            ></TextField>
          </div>
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="password"
              labelText="Password"
              inputType="password"
              value={props.data.password}
              inputPlaceholder=""
              onChange={setPasswordInput}
            ></TextField>
          </div>
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="passwordConfirmation"
              labelText="Confirm Password"
              inputType="password"
              inputPlaceholder=""
              onChange={setPasswordConfirmationInput}
            ></TextField>
          </div>
          <div className={classes.submitBtn}>
            <div>
              <PrimaryButton name="Save" onClick={saveEditHandler} />
            </div>
            <div>
              <PrimaryButton name="Exit" onClick={exitEditHandler} />
            </div>
          </div>
          {/* <div className={classes.submitBtn}></div> */}
        </form>
      </Card>
    </Overlay>
  );
}

export default EditProfileForm;
