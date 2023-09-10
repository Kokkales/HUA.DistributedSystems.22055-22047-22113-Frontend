import Card from '../ui/Card';
import classes from './DivorceItem.module.css';
import { useState } from 'react';
import FullDivorce from './FullDivorce';
import EditDivorce from '../users/lawyers/EditDivorce';

function DivorceItem(props) {
  const [isWatch, setIsWatch] = useState(false);
  const [editIsWatch, setEditIsWatch] = useState(false);
  const [fullData, setFullData] = useState({});
  // setEditIsWatch(childProperty);
  console.log('Item id= ' + props.id);
  console.log('Divorce type: ' + props.type);

  function openDivorce() {
    setIsWatch(false);
  }

  function closeEditDivorce() {
    setEditIsWatch(false);
  }

  function openEditDivorce() {
    setEditIsWatch(true);
    setIsWatch(false);
    //comment
  }

  // function handleDivorceFullData(data) {
  //   setFullData(data);
  // }

  async function onClickHandler(event) {
    event.preventDefault();
    console.log('I clicked');
    // console.log(props.id);
    // console.log('Type: ' + props.status);
    // console.log('Divorce Item role passed: ' + props.role);

    setIsWatch(true);
  }
  // onClick={props.onClick}
  return (
    <Card>
      <div className={classes.divorceItem} onClick={onClickHandler}>
        <div className={classes.status}>
          {/*Pending svg*/}
          {props.status === 'Pending' && (
            <svg
              width="30"
              height="30"
              color="blue"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {/*Acception svg*/}
          {props.status === 'Completed' && (
            <svg
              width="30"
              height="30"
              color="green"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {/*rejection svg*/}

          {props.status === 'Cancelled' && (
            <svg
              width="30"
              height="30"
              color="red"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {/*Objection svg*/}
          {props.status === 'Draft' && (
            <svg
              width="30"
              height="30"
              color="orange"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          )}
        </div>
        <div className={classes.spouseOne}>
          <div>{props.spouseOne}</div>
        </div>
        <div className={classes.seperate}>
          <p>-</p>
        </div>
        <div className={classes.spouseTwo}>
          <div>{props.spouseTwo}</div>
        </div>
      </div>
      {isWatch && (
        <FullDivorce
          role={props.role}
          type={props.type}
          // isShown={isWatch}
          formState={openDivorce}
          formEditState={openEditDivorce}
          // divorceFullData={handleDivorceFullData}
          divorceId={props.id}
          page={props.page}
        />
      )}
      {editIsWatch && (
        // <div>
        <EditDivorce
          divorceId={props.id}
          role={props.role}
          type={props.type}
          // data={fullData}
          formEditState={closeEditDivorce}
          // isEditShown={isShown}
        />
      )}
    </Card>
  );
}

export default DivorceItem;
