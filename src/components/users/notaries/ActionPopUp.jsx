import classes from './ActionPopUp.module.css';
import Overlay from '../../ui/Overlay';
import Card from '../../ui/Card';
import PrimaryButton from '../../ui/PrimaryButton';
import TextField from '../../ui/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ActionPopUp(props) {
  // const [isWatch, setIsWatch] = useState;
  function finishAcceptionHandler(event) {
    event.preventDefault();
    console.log('Finish Acception Button Clicked');
    props.formState(false);
  }

  const navigate = useNavigate();
  function exitHandler(event) {
    event.preventDefault();
    console.log('exit Acception Button Clicked');
    props.formState(false);

    // navigate('/notary/workspace');
  }

  return (
    <Overlay>
      <Card>
        <div className={classes.acceptForm}>
          <div className={classes.title}>
            {props.actionType == 'accept' && (
              <h1 className={classes.hTitle}>Accept</h1>
            )}
            {props.actionType == 'reject' && (
              <h1 className={classes.hTitle}>Reject</h1>
            )}
            {props.actionType == 'object' && (
              <h1 className={classes.hTitle}>Object</h1>
            )}
            <div className={classes.exitX}>
              <svg
                width="30"
                height="30"
                onClick={exitHandler}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className={classes.notorialDeedNumber}>
            {props.role == 'notary' && (
              <TextField labelText="Notorial Deed number" />
            )}
            {props.role != 'notary' && <TextField labelText="Comment" />}
          </div>
          <div className={classes.finish}>
            <PrimaryButton name="Submit" onClick={finishAcceptionHandler} />
          </div>
        </div>
      </Card>
    </Overlay>
  );
}

export default ActionPopUp;
