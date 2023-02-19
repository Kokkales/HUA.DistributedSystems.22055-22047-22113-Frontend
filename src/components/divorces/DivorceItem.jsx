import Card from '../ui/Card';
import classes from './DivorceItem.module.css';
import { useState, useEffect } from 'react';
import WatchDivorce from './WatchDivorce';

function DivorceItem(props) {
  const [isPendingWatch, setIsPendingWatch] = useState(false);
  const [isCompleteWatch, setIsCompleteWatch] = useState(false);
  const [isDraftWatch, setIsDraftWatch] = useState(false);
  const [fullDivorce, setFullDivorce] = useState({});

  function openPending() {
    setIsPendingWatch(false);
  }
  function openDraft() {
    setIsDraftWatch(false);
  }
  function openComplete() {
    setIsCompleteWatch(false);
  }
  async function onClickHandler(event) {
    event.preventDefault();
    console.log('I clicked');
    console.log(props.id);
    //request all the information of the certain divorce
    // await fetch('http://localhost:8887/divorce/findById?id=' + `${props.id}`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('Returned Data : ' + JSON.stringify(data.status));
    //     const divorce = {
    //       id: data.id,
    //       status: data.status,
    //       spouseOne: data.spouseOneName,
    //       spouseTwo: data.spouseTwoName,
    //       contractDetails: data.contractDetails,
    //       date: data.date,
    //       lawyerLeadName: data.lawyerLeadName,
    //       lawyerSecName: data.lawyerName,
    //       notaryName: data.notaryName,
    //     };
    //     setFullDivorce(divorce);
    //     console.log('Spouse One Check : ' + fullDivorce);
    //     // meetups.push(meetup);
    //   });
    setIsPendingWatch(true);
  }
  // onClick={props.onClick}
  return (
    <Card>
      <div className={classes.divorce} onClick={onClickHandler}>
        <div className={classes.status}>
          <div>{props.status}</div>
        </div>
        <div className={classes.spouseOne}>
          <div>{props.spouseOne}</div>
        </div>
        <div className={classes.spouseTwo}>
          <div>{props.spouseTwo}</div>
        </div>
        <div className={classes.seperate}>
          <p>-</p>
        </div>
      </div>
      {isPendingWatch && (
        <WatchDivorce
          role={props.role}
          type={props.type}
          isShown={isPendingWatch}
          formState={openPending}
          data={fullDivorce}
        />
      )}
      {isDraftWatch && (
        <WatchDivorce
          role={props.role}
          type={props.type}
          isShown={isDraftWatch}
          formState={openDraft}
          data={fullDivorce}
        />
      )}
      {isCompleteWatch && (
        <WatchDivorce
          role={props.role}
          isShown={isCompleteWatch}
          formState={openComplete}
          // spouseOne={fullDivorce.spouseOne}
          type={props.type}
        />
      )}
    </Card>
  );
}

export default DivorceItem;
