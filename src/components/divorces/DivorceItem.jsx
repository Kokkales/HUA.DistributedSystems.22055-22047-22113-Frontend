import Card from '../ui/Card';
import classes from './DivorceItem.module.css';

function DivorceItem(props) {
  return (
    <div onClick={props.onClick}>
      <Card>
        <div className={classes.divorce}>
          <div className={classes.status}>X</div>
          <div className={classes.spouseOne}>John Doe</div>
          <div className={classes.spouseTwo}>Nancy Jordan</div>
          <div className={classes.submitDate}>
            <p>Submit: 12/12/12</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default DivorceItem;
