import classes from './WatchPendingDivorce.module.css';
import Overlay from '../ui/Overlay';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import FullDivorce from '../divorces/FullDivorce';
//only shows the divorce information and the status //pop up  window
function WatchPendingDivorce(props) {
  const isShown = props.isShown;

  function exitHandler(event) {
    console.log('exit pending button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
    console.log('divorce watced - exit button clicked');
    console.log('fullDivorce ' + props.spouseOne);
  }

  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.divorce}>
            <section className={classes.pendingDivorce}>
              <FullDivorce data={props.data} exitHandler={exitHandler} />
            </section>
            <section className={classes.options}>
              <div className={classes.cancel}>
                <PrimaryButton name="Cancel" onClick={exitHandler} />
              </div>
              <div className={classes.close}>
                <PrimaryButton name="Close" onClick={exitHandler} />
              </div>
              <div className={classes.reminder}>
                <PrimaryButton name="Reminder" onClick={exitHandler} />
              </div>
            </section>
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchPendingDivorce;
