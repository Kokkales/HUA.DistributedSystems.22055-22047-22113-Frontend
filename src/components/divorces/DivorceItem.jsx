import Card from '../ui/Card';
import classes from './DivorceItem.module.css';

function DivorceItem(props) {
  return (
    <Card className={classes.divorce}>
      <div className={classes.divorce} onClick={props.onClick}>
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
    </Card>
  );
}

export default DivorceItem;
