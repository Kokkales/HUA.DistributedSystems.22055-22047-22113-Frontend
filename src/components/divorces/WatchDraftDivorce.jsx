import classes from './WatchDraftDivorce.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import FullDivorce from '../divorces/FullDivorce';

//only shows the divorce information and the status //pop up  window
function WatchDraftDivorce(props) {
  const isShown = props.isShown;
  function exitHandler(event) {
    console.log('exit Draft button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
    console.log('divorce watced - exit button clicked');
  }
  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <FullDivorce data={props.data} exitHandler={exitHandler} />
          <section className={classes.options}>
            <PrimaryButton name="Edit" onClick={exitHandler} />
            <PrimaryButton name="Commit" onClick={exitHandler} />
            <PrimaryButton name="Close" onClick={exitHandler} />
          </section>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchDraftDivorce;
