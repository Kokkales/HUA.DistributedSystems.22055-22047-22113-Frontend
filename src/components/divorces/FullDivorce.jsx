import classes from './FullDivorce.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
// import classes from './WatchDivorce.module.css';

function FullDivorce(props) {
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
          <div className={classes.completeDivorce}>
            <section className={classes.mainCharacters}>
              <div className={classes.divorceNames}>
                <div className={classes.spouseOne}>
                  <h1>{props.data.spouseOne} vs</h1>
                </div>
                <div className={classes.spouseTwo}>
                  <h1>{props.data.spouseTwo}</h1>
                </div>
              </div>
              <div className={classes.exitX}>
                <svg
                  width="50"
                  height="50"
                  onClick={exitHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </section>
            <section className={classes.involvedParties}>
              <h2>Parties</h2>
              <div className={classes.ones}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse1:</h3>
                  <p className={classes.involvedName}>
                    {props.data.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {props.data.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer1:</h3>
                  <p className={classes.involvedName}>
                    {props.data.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {props.data.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
              </div>
              <div className={classes.twos}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse2:</h3>
                  <p className={classes.involvedName}>
                    {props.data.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {props.data.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer2:</h3>
                  <p className={classes.involvedName}>
                    {props.data.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {props.data.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
              </div>
            </section>
            <section className={classes.contractDetails}>
              <h2>Details</h2>
              <div>
                <h3 className={classes.label}>Application Date:</h3>
                <div className={classes.info}>{props.data.date}</div>
              </div>
              <div>
                <h3 className={classes.label}>Contract Details:</h3>
                <h3 className={classes.info}>{props.data.contractDetails}</h3>
              </div>
            </section>
            <section className={classes.status}>
              <h2>Result</h2>
              <div>
                <h3>Status</h3>
                <div className={classes.info}>{props.data.status}</div>
              </div>
              <div className={classes.externals}>
                <div className={classes.notaryInfo}>
                  <h3 className={classes.label}>Notary:</h3>
                  <p className={classes.involvedName}>
                    {props.data.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {props.data.spouseOneStatus}ok
                  </div>
                </div>
                <div>
                  <h3>Notorial Deed Number:</h3>
                </div>
              </div>
            </section>
            <section className={classes.options}>
              {/* Lawyer Options */}
              {props.type == 'draft' && props.role == 'lawyer' && (
                <section className={classes.options}>
                  <div className={classes.draftLawyerOptions}>
                    <div className={classes.cancelPendingLawyerButton}>
                      <PrimaryButton name="Edit" onClick={exitHandler} />
                    </div>
                    <div className={classes.exitPendingLawyerButton}>
                      <PrimaryButton name="Delete" onClick={exitHandler} />
                    </div>
                    <div className={classes.remindPendingLawyerButton}>
                      <PrimaryButton name="Exit" onClick={exitHandler} />
                    </div>
                  </div>
                </section>
              )}
              {props.type == 'pending' && props.role == 'lawyer' && (
                <section className={classes.options}>
                  <div className={classes.pendingLawyerOptions}>
                    <div className={classes.cancelPendingLawyerButton}>
                      <PrimaryButton
                        name="Cancel Divorce"
                        onClick={exitHandler}
                      />
                    </div>
                    <div className={classes.exitPendingLawyerButton}>
                      <ReminderButton onClick={exitHandler} />
                    </div>
                    <div className={classes.remindPendingLawyerButton}>
                      <PrimaryButton name="Exit" onClick={exitHandler} />
                    </div>
                  </div>
                </section>
              )}
              {props.type == 'completed' && props.role == 'lawyer' && (
                <section className={classes.options}>
                  <div className={classes.completedLawyerOptions}>
                    <PrimaryButton name="Close" onClick={exitHandler} />
                  </div>
                </section>
              )}
              {/* Notary options */}
              {props.type == 'pending' && props.role == 'notary' && (
                <section className={classes.options}>
                  <div className={classes.pendingNotaryOptions}>
                    <div className={classes.acceptPendingNotaryButton}>
                      <PrimaryButton name="Accept" onClick={exitHandler} />
                    </div>
                    <div className={classes.closePendingNotaryButton}>
                      <PrimaryButton name="Close" onClick={exitHandler} />
                    </div>
                  </div>
                </section>
              )}
              {props.type == 'completed' && props.role == 'notary' && (
                <section className={classes.options}>
                  <div className={classes.completedLawyerOptions}>
                    <PrimaryButton name="Close" onClick={exitHandler} />
                  </div>
                </section>
              )}
              {/* Spouse Options */}
              {props.type == 'pending' && props.role == 'spouse' && (
                <section className={classes.options}>
                  <div className={classes.pendingSpouseOptions}>
                    <div className={classes.acceptedPendingSpouseButton}>
                      <PrimaryButton name="Accept" onClick={exitHandler} />
                    </div>
                    <div className={classes.rejectedPendingSpouseButton}>
                      <PrimaryButton name="Reject" onClick={exitHandler} />
                    </div>
                    <div className={classes.objectedPendingSpouseButton}>
                      <PrimaryButton name="Objection" onClick={exitHandler} />
                    </div>
                    <div className={classes.exitPendingSpouseButton}>
                      <PrimaryButton name="Close" onClick={exitHandler} />
                    </div>
                  </div>
                </section>
              )}
              {props.type == 'completed' && props.role == 'spouse' && (
                <section className={classes.options}>
                  <div className={classes.completedLawyerOptions}>
                    <PrimaryButton name="Close" onClick={exitHandler} />
                  </div>
                </section>
              )}
            </section>
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default FullDivorce;
