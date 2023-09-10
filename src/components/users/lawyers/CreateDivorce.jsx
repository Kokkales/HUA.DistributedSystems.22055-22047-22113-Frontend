import Card from '../../ui/Card';
import PrimaryButton from '../../ui/PrimaryButton';
import Richtext from '../../ui/RichText';
import SecondaryButton from '../../ui/SecondaryButton';
import TextField from '../../ui/TextField';
import classes from './CreateDivorce.module.css';
import RichText from '../../ui/RichText';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import InvolvedCard from './InvolvedCard';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateDivorce(props) {
  const [requestStatus, seRequestStatus] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [responseBody, setResponseBody] = useState({});
  const [isError, setIsError] = useState(false);
  const [isFoundSpouseOne, setIsFoundSpouseOne] = useState(false);
  const [isFoundSpouseTwo, setIsFoundSpouseTwo] = useState(false);
  const [isFoundLawyerTwo, setIsFoundLawyerTwo] = useState(false);
  const [isFoundNotary, setIsFoundNotary] = useState(false);
  const [roleCounter, setRoleCounter] = useState();
  const navigate = useNavigate();
  const [leadLawyer, setLeadLawyer] = useState();
  const [spouseOneTaxNumber, setSpouseOneTaxNumber] = useState();
  const [spouseTwoTaxNumber, setSpouseTwoTaxNumber] = useState();
  const [lawyerTwoTaxNumber, setLawyerTwoTaxNumber] = useState();
  const [notaryTaxNumber, setNotaryTaxNumber] = useState();
  const [contractDetails, setContractDetails] = useState();
  const [divorceData, setDivorceData] = useState({});

  const [userData, setUserData] = useState({});
  const [createDivorceData, setCreateDivorceData] = useState({
    status: 'PENDING',
    contractDetails: '',
    lawyerTwoTaxNumber: '',
    spouseOneTaxNumber: '',
    spouseTwoTaxNumber: '',
    notaryTaxNumber: '',
  });

  const token = localStorage.getItem('jwtToken');
  // console.log('Draft option: ' + props.draftOptions);
  useEffect(() => {
    console.log('tthe token is:' + token);
    if (token) {
      //nothing
    } else {
      // Redirect to the login page if the token is not present
      // history.push('http://localhost:3000/');
      navigate('/');
      console.log('TOKEN ERROR');
    }
    // async function fetchData() {
    //   try {
    //     const response = await axios.get('http://localhost:8887/user', {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json', // Correct header name
    //       },
    //       withCredentials: true, // Correct usage: Boolean value
    //     });
    //     const data = response.data;
    //     console.log('OK I AM MAD: ' + JSON.stringify(data));
    //     setUserData(data);
    //     // props.takeUserRole(data.role);
    //     // console.log('THE ROLE IS: ' + data.role);
    //     // setLoadedDivorces(divorces);
    //   } catch (error) {
    //     console.log('ERROR: ', error);
    //   }
    // }
    // fetchData();
    // // setCreateDivorceData({
    //   ...createDivorceData,
    //   lawyerLeadTaxNumber: userData.taxNumber,
    // });
    // createDivorceData.lawyerLeadTaxNumber = userData.taxNumber;
    // console.log('LEAD LAWYER: ' + userData.taxNumber);
  }, []);

  function handleSpouseOneTaxNumber(value) {
    console.log('The value is: ' + value);
    // setSpouseOneTaxNumber(value);
    createDivorceData.spouseOneTaxNumber = value;
    console.log(
      'I am the parent and spouse one is: ' +
        createDivorceData.spouseOneTaxNumber
    );
  }

  function handleSpouseTwoTaxNumber(value) {
    setSpouseTwoTaxNumber(value);
    createDivorceData.spouseTwoTaxNumber = value;
    console.log('I am the parent and spouse Two is: ' + value);
  }
  function handleLawyerTwoTaxNumber(value) {
    setLawyerTwoTaxNumber(value);
    createDivorceData.lawyerTwoTaxNumber = value;
    console.log('I am the parent and lawyer Two is: ' + value);
  }
  function handleNotaryTaxNumber(value) {
    setNotaryTaxNumber(value);
    createDivorceData.notaryTaxNumber = value;
    console.log(
      'I am the parent and notary is: ' + createDivorceData.notaryTaxNumber
    );
  }

  function handleContractDetails(value) {
    setContractDetails(value);
    createDivorceData.contractDetails = value;
    console.log(
      'The contract details are : ' + createDivorceData.contractDetails
    );
  }

  async function createDivorceHandler(event) {
    event.preventDefault();
    console.log('create new divorce button clicked');
    console.log('Divorce Data: ' + JSON.stringify(createDivorceData));
    if (roleCounter < 5) {
      console.log('Yoou should complete all the empty spaces!!!!');
    }
    try {
      const response = await axios.post(
        'http://localhost:8887/divorce/save',
        createDivorceData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
    } catch (error) {
      if (error.message == 'Request failed with status code 500') {
        console.log('User not found invotation to send');
        // setIsFound(false);
      }
      // console.log('Find User with Tax error: ', error);
    }
  }

  async function saveDivorceHandler(event) {
    event.preventDefault();
    console.log('create new divorce button clicked');
    console.log('Divorce Data: ' + JSON.stringify(createDivorceData));
    createDivorceData.status = 'DRAFT';
    if (roleCounter < 5) {
      console.log('Yoou should complete all the empty spaces!!!!');
    }
    try {
      const response = await axios.post(
        'http://localhost:8887/divorce/save',
        createDivorceData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
    } catch (error) {
      if (error.message == 'Request failed with status code 500') {
        console.log('User not found invotation to send');
        // setIsFound(false);
      }
      // console.log('Find User with Tax error: ', error);
    }
  }

  // async function saveDivorceHandler(event) {
  //   event.preventDefault();
  //   event.preventDefault();
  //   console.log('create new divorce button clicked');
  //   createDivorceData.status = 'DRAFT';
  //   console.log('Divorce Data: ' + createDivorceData);
  //   if (roleCounter < 5) {
  //     console.log('Yoou should complete all the empty spaces!!!!');
  //   }
  //   //check if all data needed are ok an then
  //   //create the new divorce
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(createDivorceData), //request pass data
  //   };
  //   await fetch('http://localhost:8887/divorce/save', requestOptions)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       navigate('/lawyer/workspace');
  //       console.log(data);
  //     });
  //   console.log('save button clicked');
  // }

  return (
    <div className={classes.createDivorce}>
      <section className={classes.addMembers}>
        <div className={classes.addInvolvedTitle}>
          <h1>Involved Parties</h1>
        </div>
        <div className={classes.spouseOneCard}>
          <InvolvedCard
            // onBlur={onBlurSpouseOneHandler}
            // isFound={isFoundSpouseOne}
            involvedTitle="Spouse One"
            isDisabled={props.isDisabled}
            saved={props.saved}
            returnedTaxNumber={handleSpouseOneTaxNumber}
            // nameValue={saveDivorceData.spouseOneTaxNumber}
          />
        </div>
        <div className={classes.spouseTwoCard}>
          <InvolvedCard
            // onBlur={onBlurSpouseTwoHandler}
            // isFound={isFoundSpouseTwo}
            involvedTitle="Spouse Two"
            isDisabled={props.isDisabled}
            saved={props.saved}
            returnedTaxNumber={handleSpouseTwoTaxNumber}
          />
        </div>
        <div className={classes.lawyerTwoCard}>
          <InvolvedCard
            // onBlur={onBlurLawyerTwoHandler}
            // isFound={isFoundLawyerTwo}
            involvedTitle="Lawyer Two"
            isDisabled={props.isDisabled}
            saved={props.saved}
            returnedTaxNumber={handleLawyerTwoTaxNumber}
          />
        </div>
        <div className={classes.notaryCard}>
          <InvolvedCard
            // onBlur={onBlurNotaryHandler}
            // isFound={isFoundNotary}
            involvedTitle="Notary"
            isDisabled={props.isDisabled}
            saved={props.saved}
            returnedTaxNumber={handleNotaryTaxNumber}
          />
        </div>
      </section>
      <section className={classes.addDetails}>
        <div className={classes.contractDetailsTitle}>
          <h1>Contract Details</h1>
        </div>
        <div className={classes.details}>
          <RichText
            returnedContractDetails={handleContractDetails}
            value="this is a text"
          />
        </div>
        <div className={classes.options}>
          <div className={classes.draftButton}>
            {/* {props.draftOptions != false && (
              <PrimaryButton name="Draft" onClick={saveDivorceHandler} />
            )} */}
          </div>
          <div className={classes.createButton}>
            <PrimaryButton name="Create" onClick={createDivorceHandler} />
          </div>
          {props.isEditType === true && (
            <div className={classes.exitButton}>
              <PrimaryButton name="Exit" onClick={props.onClick} />
            </div>
          )}
        </div>
      </section>
      {/* {isError && <ErrorNotification message={errorMessage} />} */}
    </div>
  );
}

export default CreateDivorce;
<section className={classes.addMembers}></section>;
