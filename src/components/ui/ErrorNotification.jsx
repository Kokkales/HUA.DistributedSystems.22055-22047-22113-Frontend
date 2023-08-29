import Card from './Card';
import classes from './ErrorNotification.module.css';

function ErrorNotification(props) {
  return (
    <Card>
      <div className={classes.notificationCard}>
        <div>
          <p>{props.message}Wrong Password</p>
        </div>
      </div>
    </Card>
  );
}

export default ErrorNotification;
