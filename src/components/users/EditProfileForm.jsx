import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './EditProfileForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Overlay from '../ui/Overlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'babel-plugin-react-html-attrs';

function EditProfileForm(props) {
  const isShown = props.isShown;
  const [newEmail, setNewEmail] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');
  // console.log('Draft option: ' + props.draftOptions);
  // useEffect(() => {
  console.log('tthe token is:' + token);
  if (token) {
    //nothing
  } else {
    navigate('/');
    console.log('TOKEN ERROR');
  }
  console.log('ok');
  // }, []);

  async function saveEditHandler(event) {
    console.log(props.data.firstName);
    event.preventDefault();
    //POST changes
    if (newPassword !== newPasswordConfirmation) {
      alert("Passwords don't match");
      return;
    }
    console.log('NEW PHONE NUMBER: ' + newPhoneNumber);
    //     {
    //     "taxNumber": 28,
    //     "email": "kdegogay1@redcross.org",
    //     "phoneNumber": "8222214093",
    //     "password": "test"
    // }
    const updatedUser = {
      taxNumber: props.data.taxNumber,
      email: newEmail,
      password: newPassword,
      taxNumber: props.data.taxNumber,
      phoneNumber: newPhoneNumber,
    };
    console.log('Register button clicked');
    console.log('Password: ' + updatedUser.firstname);
    console.log('firstName: ' + updatedUser.firstname);
    console.log('lastName: ' + updatedUser.lastname);
    console.log('taxNumber: ' + updatedUser.taxNumber);
    console.log('identityCard: ' + updatedUser.identityCard);
    console.log('phoneNumber: ' + updatedUser.phoneNumber);
    try {
      console.log("Update user's data" + JSON.stringify(updatedUser));
      //todo change the path
      const response = await axios.post(
        'http://localhost:8887/user/edit',
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
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
              // value={props.data.email}
              // isDisabled={false}
              // inputPlaceholder=" something@xxxx.xxx"
              onChange={setEmailInput}
            ></TextField>
          </div>
          <div className={classes.taxNumberInput}>
            <TextField
              labelHtmlFor="phoneNumber"
              labelText="Phone Number"
              inputType="tel"
              // value={props.data.phoneNumber}
              onChange={setPhoneNumberInput}
              // inputPlaceholder="e.g 6985637584"
            ></TextField>
          </div>
          <div className={classes.passwordInput}>
            <TextField
              labelHtmlFor="password"
              labelText="Password"
              inputType="password"
              // value={props.data.password}
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
