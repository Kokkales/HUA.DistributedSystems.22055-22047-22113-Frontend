import classes from './WatchPendingDivorce.module.css';
import Overlay from '../ui/Overlay';
import LoginLayout from '../layout/auth_layout/LoginLayout';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
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
    console.log('fullDivorce ' + props.spouseok);
  }
  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.completeDivorce}>
            <section className={classes.mainCharacters}>
              <div className={classes.divorceNames}>
                <div className={classes.spouseOne}>
                  <h1>{props.spouseok} vs </h1>
                </div>
                <div className={classes.spouseTwo}>
                  {/* <h1>{props.spouseTwo}</h1> */}
                </div>
              </div>
              <div className={classes.exitX}>
                <div onClick={exitHandler}>X</div>
              </div>
            </section>
            <section className={classes.involvedParties}>
              <h2>Parties</h2>
              <div>
                <h3 className={classes.label}>Lawyer1:</h3>
                <div className={classes.info}> Nikos Xaskaris</div>
              </div>
              <div>
                <div className={classes.label}>Lawyer2:</div>
                <div className={classes.info}> Orestis Kritsotakis</div>
              </div>
              <div>
                <div className={classes.label}>Notary:</div>
                <div className={classes.info}> Alkis Georgis</div>
              </div>
            </section>
            <section className={classes.contractDetails}>
              <h2>Details</h2>
              <div>
                <div className={classes.label}>Application Date:</div>
                <div className={classes.info}>26/01/2023</div>
              </div>
              <div>
                <div className={classes.label}>Contract Details:</div>
                <div className={classes.info}>
                  The broke up reason is because ypu didn't make adeal with me
                  in MONOPOLY. Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Deserunt dolorem asperiores ea, delectus
                  voluptatem unde ab eos dolore nesciunt similique odio
                  quibusdam eum facere nemo fuga ex perferendis vitae minus?
                </div>
              </div>
            </section>
            <section className={classes.status}>
              <h2>Result</h2>
              <div>
                <div className={classes.info}>Rejected</div>
              </div>
            </section>
            <section className={classes.options}>
              <div>
                <PrimaryButton name="Edit" onClick={exitHandler} />
                <PrimaryButton name="Cancel" onClick={exitHandler} />
                <PrimaryButton name="Close" onClick={exitHandler} />
              </div>
            </section>
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default WatchPendingDivorce;
