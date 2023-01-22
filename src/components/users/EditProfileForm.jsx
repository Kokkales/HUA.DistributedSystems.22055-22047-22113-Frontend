import Card from '../ui/Card';
import TextField from '../ui/TextField';
import classes from './EditProfileForm.module.css';
import PrimaryButton from '../ui/PrimaryButton';

// import { Link } from 'react-router-dom';
import PrimaryLink from '../ui/PrimaryLink';
import SecondaryLink from '../ui/SecondaryLink';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import { Link } from 'react-router-dom';

function EditProfileForm(props) {
  function saveEditHandler(event) {
    event.preventDefault();
    console.log('edit button clicked');
    <Link to="user/profile" />;
  }
  return (
    <LoginLayout>
      <Card>
        <div className={classes.content}>
          <form className={classes.form}>
            <div className={classes.loginHeader}>
              <h1>Edit Profile Form</h1>
            </div>
            <div className={classes.taxNumberInput}>
              <TextField
                labelHtmlFor="taxNumber"
                labelText="Tax Number"
                inputType="text"
                inputPlaceholder="e.g 123456"
              ></TextField>
            </div>
            <div className={classes.taxNumberInput}>
              <TextField
                labelHtmlFor="identityCardNumber"
                labelText="Identiy Card Number"
                inputType="text"
                inputPlaceholder="e.g AD4365"
              ></TextField>
            </div>
            <div className={classes.taxNumberInput}>
              <TextField
                labelHtmlFor="firstName"
                labelText="First Name"
                inputType="text"
                inputPlaceholder="e.g Katerina"
              ></TextField>
            </div>
            <div className={classes.taxNumberInput}>
              <TextField
                labelHtmlFor="lastName"
                labelText="Last Name"
                inputType="text"
                inputPlaceholder="e.g Konstantidi"
              ></TextField>
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
              {/* <PrimaryButton text="Register" /> */}
              <PrimaryButton>
                <button onClick={saveEditHandler}>Save</button>
              </PrimaryButton>
            </div>
          </form>
        </div>
      </Card>
    </LoginLayout>
  );
}

export default EditProfileForm;
