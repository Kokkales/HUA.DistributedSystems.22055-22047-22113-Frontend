import classes from './InvolvedCard.module.css';
import Card from '../../ui/Card';
import TextField from '../../ui/TextField';
import PrimaryButton from '../../ui/PrimaryButton';
import { useState } from 'react';

function InvolvedCard(props) {
  const [taxNumber, setTaxNumber] = useState();
  const [email, setEmail] = useState('');
  const [isFound, setIsFound] = useState(true);
  function handleTaxNumberChange(event) {
    // setMessage(event.target.value);
    console.log('The tax number is: ' + event.target.value);
    setTaxNumber(event.target.value);
    //return to create divorce this data
    props.returnedTaxNumber(taxNumber);
  }
  function handleEmailChange(event) {
    // setMessage(event.target.value);
    console.log('The email is: ' + event.target.value);
    setEmail(event.target.value);
  }

  async function sendEmailHandler(event) {
    event.preventDefault();
    //check if the email textbox is empty
    if (email.length == 0) {
      console.log('You should complete the textfield');
    }
    //send email
    console.log('Email to be sent: ' + email);
    console.log('Taxnumber to be sent: ' + taxNumber);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(), //request pass data
    };
    await fetch(
      'http://localhost:8887/user/invite/?taxNumber=' +
        taxNumber +
        '&email=' +
        email,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  async function onBlurHandler(event) {
    //check if the taxnumber textbox is as it has to be
    event.preventDefault();
    console.log('Search for this taxNumber if exists:' + taxNumber);
    //get request if exists setIsFound(true);
    await fetch('http://localhost:8887/user/find?taxNumber=' + taxNumber)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setIsFound(false);
          return response.json();
        }
      })
      .then((data) => {
        console.log('ok');
        if (
          data.message ==
          'User with tax number: ' + taxNumber + "wasn't found"
        ) {
          setIsFound(false);
          // console.log('Data length' +);
          console.log('not found');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Card>
      <div className={classes.involvedCard}>
        <div className={classes.cardTitle}>
          <h2>{props.involvedTitle}</h2>
        </div>
        <div className={classes.taxTextField}>
          {/* <input type="text"  /> */}
          <TextField
            labelHtmlFor="taxNumber"
            labelText="Tax Number"
            inputType="text"
            inputPlaceholder="e.g 123456"
            onBlur={onBlurHandler}
            isDisabled={props.isDisabled}
            onChange={handleTaxNumberChange}
          />
        </div>
        {(!isFound || props.saved) && (
          <div>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="email"
              inputPlaceholder="e.g 123456"
              isDisabled={props.isDisabled}
              onChange={handleEmailChange}
            />
            <div className={classes.cardFindButton}>
              <PrimaryButton name="Send" onClick={sendEmailHandler} />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default InvolvedCard;
