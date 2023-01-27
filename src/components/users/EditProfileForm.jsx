import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './EditProfileForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Modal from '../ui/Overlay';

import { useState } from 'react';

function EditProfileForm(props) {
  const isShown = props.isShown;
  function saveEditHandler(event) {
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('close the form');
    }
    props.formState(isShown);
    console.log('new data saved - button clicked');
  }
  return (
    <Modal>
      {/* <LoginLayout> */}
      <form className={classes.form}>
        <div className={classes.loginHeader}>
          <h1>Edit Profile Form</h1>
        </div>
        <div className={classes.taxNumberInput}>
          <TextField
            labelHtmlFor="email"
            labelText="Email"
            inputType="text"
            inputPlaceholder=" something@xxxx.xxx"
          ></TextField>
        </div>
        <div className={classes.taxNumberInput}>
          <TextField
            labelHtmlFor="phoneNumber"
            labelText="Phone Number"
            inputType="tel"
            inputPlaceholder="e.g 6985637584"
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
        <div className={classes.passwordInput}>
          <TextField
            labelHtmlFor="passwordConfirmation"
            labelText="Confirm Password"
            inputType="password"
            inputPlaceholder=""
          ></TextField>
        </div>
        <div className={classes.submitBtn}>
          <PrimaryButton name="Save" onClick={saveEditHandler} />
        </div>
      </form>
      {/* </LoginLayout> */}
    </Modal>
  );
}

export default EditProfileForm;
