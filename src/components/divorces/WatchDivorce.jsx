import classes from './WatchDivorce.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import FullDivorce from '../divorces/FullDivorce';

function WatchDivorce(props) {
  const isShown = props.isShown;
  console.log('Type: ' + props.type);

  function exitHandler(event) {
    console.log('exit pending button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
  }

  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.divorce}>
            <section className={classes.pendingDivorce}>
              <FullDivorce data={props.data} exitHandler={exitHandler} />
            </section>

            {/* Lawyer Options */}
            {props.type == 'draft' && props.role == 'lawyer' && (
              <section className={classes.options}>
                <PrimaryButton name="Edit" onClick={exitHandler} />
                <PrimaryButton name="Delete" onClick={exitHandler} />
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
            {props.type == 'pending' && props.role == 'lawyer' && (
              <section className={classes.options}>
                <div className={classes.cancel}>
                  <PrimaryButton name="Cancel" onClick={exitHandler} />
                  <PrimaryButton name="Remind" onClick={exitHandler} />
                  <PrimaryButton name="Close" onClick={exitHandler} />
                </div>
              </section>
            )}
            {props.type == 'completed' && props.role == 'lawyer' && (
              <section className={classes.options}>
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
            {/* Notary options */}
            {props.type == 'pending' && props.role == 'notary' && (
              <section className={classes.options}>
                <PrimaryButton name="Accept" onClick={exitHandler} />
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
            {props.type == 'completed' && props.role == 'notary' && (
              <section className={classes.options}>
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
            {/* Spouse Options */}
            {props.type == 'pending' && props.role == 'spouse' && (
              <section className={classes.options}>
                <PrimaryButton name="Accept" onClick={exitHandler} />
                <PrimaryButton name="Reject" onClick={exitHandler} />
                <PrimaryButton name="Objection" onClick={exitHandler} />
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
            {props.type == 'completed' && props.role == 'spouse' && (
              <section className={classes.options}>
                <PrimaryButton name="Close" onClick={exitHandler} />
              </section>
            )}
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchDivorce;
