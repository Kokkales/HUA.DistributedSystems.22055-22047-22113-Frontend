import Card from '../../ui/Card';
import PrimaryButton from '../../ui/PrimaryButton';
import Richtext from '../../ui/RichText';
import SecondaryButton from '../../ui/SecondaryButton';
import TextField from '../../ui/TextField';
import classes from './CreateDivorce.module.css';
import RichText from '../../ui/RichText';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InvolvedCard from './InvolvedCard';

function CreateDivorce(props) {
  const [isFoundSpouseOne, setIsFoundSpouseOne] = useState(false);
  const [isFoundSpouseTwo, setIsFoundSpouseTwo] = useState(false);
  const [isFoundLawyerTwo, setIsFoundLawyerTwo] = useState(false);
  const [isFoundNotary, setIsFoundNotary] = useState(false);
  const navigate = useNavigate();

  function onBlurSpouseOneHandler(event) {
    console.log('unfocused');
    setIsFoundSpouseOne(true);
  }

  function onBlurSpouseTwoHandler(event) {
    console.log('unfocused');
    setIsFoundSpouseTwo(true);
  }

  function onBlurLawyerTwoHandler(event) {
    console.log('unfocused');
    setIsFoundLawyerTwo(true);
  }

  function onBlurNotaryHandler(event) {
    console.log('unfocused');
    setIsFoundNotary(true);
  }

  function createDivorceHandler(event) {
    event.preventDefault();
    console.log('create new divorce button clicked');
    //create the new divorce
    //remove popup
  }

  function saveDivorceHandler(event) {
    event.preventDefault();
    console.log('save button clicked');
    //save the values to the divorce
    //remove popup
  }

  return (
    <div className={classes.createDivorce}>
      <section className={classes.addMembers}>
        <div className={classes.addInvolvedTitle}>
          <h1>Involved Parties</h1>
        </div>
        <div className={classes.spouseOneCard}>
          <InvolvedCard
            onBlur={onBlurSpouseOneHandler}
            isFound={isFoundSpouseOne}
            involvedTitle="Spouse One"
          />
        </div>
        <div className={classes.spouseTwoCard}>
          <InvolvedCard
            onBlur={onBlurSpouseTwoHandler}
            isFound={isFoundSpouseTwo}
            involvedTitle="Spouse Two"
          />
        </div>
        <div className={classes.lawyerTwoCard}>
          <InvolvedCard
            onBlur={onBlurLawyerTwoHandler}
            isFound={isFoundLawyerTwo}
            involvedTitle="Lawyer Two"
          />
        </div>
        <div className={classes.notaryCard}>
          <InvolvedCard
            onBlur={onBlurNotaryHandler}
            isFound={isFoundNotary}
            involvedTitle="Notary"
          />
        </div>
      </section>
      <section className={classes.addDetails}>
        <div className={classes.contractDetailsTitle}>
          <h1>Contract Details</h1>
        </div>
        <div className={classes.details}>
          <RichText />
        </div>
        <div className={classes.options}>
          <div className={classes.draftButton}>
            <PrimaryButton name="Draft" onClick={saveDivorceHandler} />
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
    </div>
  );
}

export default CreateDivorce;
<section className={classes.addMembers}></section>;
