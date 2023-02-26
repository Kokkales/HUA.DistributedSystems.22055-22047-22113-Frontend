import DivorceListLayout from '../divorces/DivorceListLayout';
import classes from './UserList.module.css';
import UserItem from './UserItem';
import { useState } from 'react';

function UserList(props) {
  return (
    <DivorceListLayout>
      {props.items.map((user) => (
        <UserItem
          key={user.key}
          taxNumber={user.taxNumber}
          status={user.userStatus}
          userFirstName={user.firstName}
          userLastName={user.lastName}
          // onClick={props.onClick}
          role={props.role}
        />
      ))}
    </DivorceListLayout>
  );
}

export default UserList;
