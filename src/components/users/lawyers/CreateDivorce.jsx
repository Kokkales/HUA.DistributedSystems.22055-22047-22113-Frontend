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
<<<<<<< Updated upstream
import { useNavigate } from 'react-router-dom';
=======
import ErrorNotification from '../../ui/ErrorNotification';
>>>>>>> Stashed changes

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
  const [createDivorceData, setCreateDivorceData] = useState({
    status: 'PENDING',
    contractDetails: '',
    lawyerLeadTaxNumber: '',
    lawyerTwoTaxNumber: '',
    spouseOneTaxNumber: '',
    spouseTwoTaxNumber: '',
    notaryTaxNumber: '',
  });

<<<<<<< Updated upstream
=======
  const [saveDivorceData, setSaveDivorceData] = useState({
    status: 'DRAFT',
    contractDetails: '',
    lawyerLeadTaxNumber: '',
    lawyerTwoTaxNumber: '',
    spouseOneTaxNumber: '',
    spouseTwoTaxNumber: '',
    notaryTaxNumber: '',
  });

  //if props.role=admin and props.type=draft
  console.log('Divorce Type:' + props.type);
  console.log('Divorce DivorceId:' + props.divorceId);
  console.log('Divorce is Saved:' + props.saved);

  useEffect(() => {
    if (props.divorceId != undefined) {
      console.log('load data');
      // fetch /divorce/findById?id=1
      fetch('http://localhost:8887/divorce/findById?id=' + props.divorceId)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('Returned Data : ' + JSON.stringify(data.status));
          const divorce = {
            id: data.id,
            status: data.status,
            spouseOne: data.spouseOneName,
            spouseTwo: data.spouseTwoName,
            contractDetails: data.contractDetails,
            date: data.date,
            lawyerLeadName: data.lawyerLeadName,
            lawyerSecName: data.lawyerName,
            notaryName: data.notaryName,
          };
          setDivorceData(divorce);
          saveDivorceData.status = divorce.status;
          saveDivorceData.spouseOneTaxNumber = divorce.spouseOne;
          saveDivorceData.spouseTwoTaxNumber = divorce.spouseTwo;
          saveDivorceData.contractDetails = divorce.contractDetails;
          saveDivorceData.lawyerLeadTaxNumber = divorce.lawyerLeadName;
          saveDivorceData.lawyerTwoTaxNumber = divorce.lawyerSecName;
          saveDivorceData.notaryTaxNumber = divorce.notaryName;
          console.log('Save DIVORCE DATA' + saveDivorceData);
          console.log('Spouse One Check : ' + divorceData);
          // meetups.push(meetup);
        });
    }
  }, []);

>>>>>>> Stashed changes
  // console.log('Draft option: ' + props.draftOptions);
  useEffect(() => {
    setLeadLawyer(1);
    createDivorceData.lawyerLeadTaxNumber = '1';
    console.log('LEAD LAWYER: ' + createDivorceData.lawyerLeadTaxNumber);
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
    console.log('I am the parent and notary is: ' + value);
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
<<<<<<< Updated upstream
    console.log('create new divorce button clicked');
    console.log('Divorce Data: ' + createDivorceData);
=======
    console.log('What is sent: ' + JSON.stringify(createDivorceData));
    if (roleCounter < 5) {
      console.log('Yoou should complete all the empty spaces!!!!');
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(createDivorceData), //request pass data
    };
    await fetch('http://localhost:8887/divorce/save', requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status == 500) {
          console.log(
            JSON.stringify('Error message create: ' + data.message, null, 4)
          );
          setIsError(true);
          setErrorMessage(data.message);
          console.log(data.message);
          console.log('Is error: ' + isError);
        }
        if (requestStatus == 400) {
          console.log('Bad request');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function saveDivorceHandler(event) {
    event.preventDefault();
    event.preventDefault();
    createDivorceData.status = 'DRAFT';
    console.log('What is sent: ' + JSON.stringify(createDivorceData));
>>>>>>> Stashed changes
    if (roleCounter < 5) {
      console.log('Yoou should complete all the empty spaces!!!!');
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(createDivorceData), //request pass data
    };
    await fetch('http://localhost:8887/divorce/save', requestOptions)
<<<<<<< Updated upstream
      .then((response) => response.json())
      .then((data) => {
        navigate('/lawyer/workspace');
        console.log(data);
      });
  }

  async function saveDivorceHandler(event) {
    event.preventDefault();
    event.preventDefault();
    console.log('create new divorce button clicked');
    createDivorceData.status = 'DRAFT';
    console.log('Divorce Data: ' + createDivorceData);
    if (roleCounter < 5) {
      console.log('Yoou should complete all the empty spaces!!!!');
    }
    //check if all data needed are ok an then
    //create the new divorce
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createDivorceData), //request pass data
    };
    await fetch('http://localhost:8887/divorce/save', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate('/lawyer/workspace');
        console.log(data);
      });
    console.log('save button clicked');
=======
      .then((response) => {
        console.log(JSON.stringify(response, null, 4));
        seRequestStatus(response.status);
        console.log(errorMessage);
        return response.json();
      })
      .then((data) => {
        if (data.status == 500) {
          // console.log(
          //   JSON.stringify('Error message create: ' + data.message, null, 4)
          // );
          setErrorMessage(data.message);
          setIsError(true);
          console.log(data.message);
        }
        if (data.status == 400) {
          console.log('Bad request');
        }
      })
      .catch((error) => {
        console.log(error);
      });
>>>>>>> Stashed changes
  }

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
            nameValue={saveDivorceData.spouseOneTaxNumber}
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
            {props.draftOptions != false && (
              <PrimaryButton name="Draft" onClick={saveDivorceHandler} />
            )}
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
      {isError && <ErrorNotification message={errorMessage} />}
    </div>
  );
}

export default CreateDivorce;
<section className={classes.addMembers}></section>;
