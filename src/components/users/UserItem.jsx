import classes from './UserItem.module.css';
import Card from '../ui/Card';
import { useState } from 'react';
import FullUser from './FullUser';
import UserList from './UserList';

function UserItem(props) {
  const [isWatch, setIsWatch] = useState();
  function onClickHandler(event) {
    event.preventDefault();
    console.log('Watch user button clicked');
    setIsWatch(true);
  }

  function openUser() {
    setIsWatch(false);
  }

  return (
    <Card>
      <div className={classes.userItem} onClick={onClickHandler}>
        <div className={classes.userStatus}>
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
          {props.status === 'Enabled' && (
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
          {props.status === 'Disabled' && (
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
        </div>
        <div className={classes.userName}>
          <div>{props.userName}djfbv</div>
        </div>
      </div>
      {/* TODO Full User profile */}
      {isWatch && (
        <FullUser
          // isShown={isWatch}
          formState={openUser}
          userId={props.id}
        />
      )}
    </Card>
  );
}

export default UserItem;
