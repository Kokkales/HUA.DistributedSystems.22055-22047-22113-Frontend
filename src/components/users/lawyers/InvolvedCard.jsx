import classes from './InvolvedCard.module.css';
import Card from '../../ui/Card';
import TextField from '../../ui/TextField';
import PrimaryButton from '../../ui/PrimaryButton';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InvolvedCard(props) {
  // const token = localStorage.getItem('jwtToken');
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjk0MzA0MTAxLCJleHAiOjE2OTQzOTA1MDF9.z-QDQU_GuI1HiAEH0Omz2YzeffP9BAW_sd8sNYRTLUo';
  const [taxNumber, setTaxNumber] = useState();
  const [email, setEmail] = useState('');
  const [isFound, setIsFound] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
  }, []);

  function sendEmailHandler(event) {
    console.log('TOKEN: ' + token);
    event.preventDefault();
    //check if the email textbox is empty
    if (email.length == 0) {
      console.log('Invite button clicked');
      console.log('You should complete the textfield');
    }
    //send email
    console.log('Email to be sent: ' + email);
    console.log('Taxnumber to be sent: ' + taxNumber);
    async function sendEmail() {
      try {
        //todo change the path
        const response = await axios.post(
          'http://localhost:8887/user/invite/?taxNumber=' +
            taxNumber +
            '&email=' +
            email,
          {
            // taxNumber: taxNumber,
            // email: email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        console.log('TOKEN2: ' + response.data);
        // const token = response.data.token;
      } catch (error) {
        console.log('Invite Error: ', error);
      }
    }
    sendEmail();
  }

  //http://localhost:8887/user/find?taxNumber=1
  async function onBlurHandler(event) {
    //check if the taxnumber textbox is as it has to be
    event.preventDefault();
    const tax = event.target.value;
    console.log('Tax Number is set: ' + tax);
    setTaxNumber(tax);
    props.returnedTaxNumber(event.target.value);
    console.log('Search for this taxNumber if exists:' + event.target.value);
    //get request if exists setIsFound(true);
    try {
      const response = await axios.get(
        'http://localhost:8887/user/find?taxNumber=' + tax,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
      console.log('Request Status: ' + data.status);
      if (data.status == 500) {
        if (
          data.message ==
          'User with tax number: ' + taxNumber + "wasn't found"
        ) {
          setIsFound(false);
          // console.log('Data length' +);
          console.log('not found');
        }
      } else if (data.status == 400) {
        setIsFound(false);
        console.log('BAD REQUEST');
      } else {
        setIsFound(true);
        console.log('User found');
      }
    } catch (error) {
      if (error.message == 'Request failed with status code 500') {
        console.log('User not found invotation to send');
        setIsFound(false);
      }
      // console.log('Find User with Tax error: ', error);
    }
  }

  async function onChangeHandler(event) {
    //check if the taxnumber textbox is as it has to be
    event.preventDefault();
    const isEmail = event.target.value;
    setEmail(isEmail);
    console.log('Blur: ' + email);
    // props.returnedTaxNumber(event.target.value);
    //get request if exists setIsFound(true);
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
            value={props.nameValue}
            // onChange={handleTaxNumberChange}
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
              onChange={onChangeHandler}
              // onBlur={handleEmailBlur}
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
