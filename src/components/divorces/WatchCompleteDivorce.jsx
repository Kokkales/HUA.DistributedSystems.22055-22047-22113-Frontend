import classes from './WatchCompleteDivorce.module.css';
import Overlay from '../ui/Overlay';
import FullDivorce from './FullDivorce';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
//only shows the divorce information and the status //pop up  window
function WatchCompleteDivorce(props) {
  const isShown = props.isShown;
  function exitHandler(event) {
    console.log('exit complete button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
    console.log('divorce watched - exit button clicked');
  }
  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <FullDivorce data={props.data} exitHandler={exitHandler} />
          <section className={classes.options}>
            <PrimaryButton name="Close" onClick={exitHandler} />
            {/* <PrimaryButton name="Close" onClick={exitHandler} />
              <PrimaryButton name="Close" onClick={exitHandler} /> */}
          </section>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchCompleteDivorce;
