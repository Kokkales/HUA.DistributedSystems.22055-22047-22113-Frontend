import Card from './Card';
import classes from './SuccesfullMessageNotification.module.css';

function SuccesfullMessageNotification(props) {
  return (
    <Card>
      <div className={classes.notificationCard}>
        <div>
          <p>{props.message}Succesfully Submited</p>
        </div>
      </div>
    </Card>
  );
}

export default SuccesfullMessageNotification;
