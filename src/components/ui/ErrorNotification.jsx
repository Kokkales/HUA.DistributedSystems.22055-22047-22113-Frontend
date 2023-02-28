import Card from './Card';
import classes from './ErrorNotification.module.css';

function ErrorNotification(props) {
  return (
    <Card>
      <div className={classes.notificationCard}>
        <p>
          {props.message}Divorce between null (1235) and null (123456) already
          exists and it's in status: Draft
        </p>
      </div>
    </Card>
  );
}

export default ErrorNotification;
