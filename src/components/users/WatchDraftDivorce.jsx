import classes from './WatchDraftDivorce.module.css';
import Overlay from '../ui/Overlay';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';

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
          <div className={classes.completeDivorce}>
            <section className={classes.mainCharacters}>
              <div className={classes.divorceNames}>
                <h1>Katerina Konstantinidi vs Iasonas Tsoukalas</h1>
              </div>
              <div className={classes.exitX}>
                <div onClick={exitHandler}>X</div>
              </div>
            </section>
            <section className={classes.involvedParties}>
              <div>Lawyer1: Nikos Xaskaris</div>
              <div>Lawyer2: Akis georgis</div>
              <div>Notary: Orestis Kritsotakis</div>
            </section>
            <section className={classes.contractDetails}>
              <div>
                Contract details: The broke up reason is because ypu didn't make
                adeal with me in MONOPOLY
              </div>
              <div>Application Date: 26/01/2023</div>
            </section>
            <section className={classes.status}>
              <div>Status: Rejected</div>
            </section>
            <section className={classes.options}>
              <PrimaryButton name="Edit" onClick={exitHandler} />
              <PrimaryButton name="Commit" onClick={exitHandler} />
              <PrimaryButton name="Close" onClick={exitHandler} />
            </section>
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchDraftDivorce;
