import classes from './InvolvedCard.module.css';
import Card from '../../ui/Card';
import TextField from '../../ui/TextField';
import PrimaryButton from '../../ui/PrimaryButton';

function InvolvedCard(props) {
  return (
    <Card>
      <div className={classes.involvedCard}>
        <div className={classes.cardTitle}>
          <h2>{props.involvedTitle}</h2>
        </div>
        <div className={classes.taxTextField}>
          {/* <input type="text"  /> */}
          <TextField
            labelHtmlFor="taxNumber"
            labelText="Tax Number"
            inputType="text"
            inputPlaceholder="e.g 123456"
            onBlur={props.onBlur}
          />
        </div>
        {props.isFound && (
          <div>
            <TextField
              labelHtmlFor="email"
              labelText="Email"
              inputType="email"
              inputPlaceholder="e.g 123456"
            />
            <div className={classes.cardFindButton}>
              <PrimaryButton name="Send" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default InvolvedCard;
