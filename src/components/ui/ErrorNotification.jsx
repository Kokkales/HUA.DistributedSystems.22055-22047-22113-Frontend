import Card from './Card';
import classes from './ErrorNotification.module.css';
import { useState, useEffect } from 'babel-plugin-react-html-attrs';

function ErrorNotification(props) {
  return (
    <Card>
      <div className={classes.notificationCard}>
        <div>
          <p>{props.message}</p>
        </div>
      </div>
    </Card>
  );
}

export default ErrorNotification;
