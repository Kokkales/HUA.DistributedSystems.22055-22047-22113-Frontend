import classes from './FullDivorceOptions.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
function FullDivorceOptions(props) {
  return (
    <div>
      {/* Lawyer Options */}
      {props.type == 'draft' &&
        props.role == 'lawyer' &&
        props.page != 'responsePage' && (
          <section className={classes.options}>
            <div className={classes.draftLawyerOptions}>
              <div className={classes.cancelPendingLawyerButton}>
                <PrimaryButton name="Edit" onClick={props.editHandler} />
              </div>
              <div className={classes.exitPendingLawyerButton}>
                <PrimaryButton name="Delete" onClick={props.deleteHandler} />
              </div>
              <div className={classes.remindPendingLawyerButton}>
                <PrimaryButton name="Exit" onClick={props.exitHandler} />
              </div>
            </div>
          </section>
        )}
      {props.type == 'pending' &&
        props.role == 'lawyer' &&
        props.page !=
          'responsePage'(
            <section className={classes.options}>
              <div className={classes.pendingLawyerOptions}>
                <div className={classes.cancelPendingLawyerButton}>
                  <PrimaryButton
                    name="Cancel Divorce"
                    onClick={props.deleteHandler}
                  />
                </div>
                <div className={classes.exitPendingLawyerButton}>
                  <ReminderButton onClick={props.reminderHandler} />
                </div>
                <div className={classes.remindPendingLawyerButton}>
                  <PrimaryButton name="Exit" onClick={props.exitHandler} />
                </div>
                <div className={classes.editPendingLawyerButton}>
                  <PrimaryButton name="Edit" onClick={props.editHandler} />
                </div>
              </div>
            </section>
          )}
      {props.type == 'completed' &&
        props.role == 'lawyer' &&
        props.page != 'responsePage' && (
          <section className={classes.options}>
            <div className={classes.completedLawyerOptions}>
              <PrimaryButton name="Close" onClick={props.exitHandler} />
            </div>
          </section>
        )}
      {/* Notary options */}
      {props.type == 'pending' && props.role == 'notary' && (
        <section className={classes.options}>
          <div className={classes.pendingNotaryOptions}>
            <div className={classes.acceptPendingNotaryButton}>
              <PrimaryButton
                name="Accept"
                onClick={props.acceptDivorceHandler}
              />
            </div>
            <div className={classes.closePendingNotaryButton}>
              <PrimaryButton name="Close" onClick={props.exitHandler} />
            </div>
          </div>
        </section>
      )}
      {props.type == 'completed' && props.role == 'notary' && (
        <section className={classes.options}>
          <div className={classes.completedLawyerOptions}>
            <PrimaryButton name="Close" onClick={props.exitHandler} />
          </div>
        </section>
      )}
      {/* Spouse Options */}
      {(props.type == 'pending' && props.role == 'spouse') ||
        (props.page == 'responsePage' && props.role == 'lawyer' && (
          <section className={classes.options}>
            <div className={classes.pendingSpouseOptions}>
              <div className={classes.acceptedPendingSpouseButton}>
                <PrimaryButton
                  name="Accept"
                  onClick={props.acceptDivorceHandler}
                />
              </div>
              <div className={classes.rejectedPendingSpouseButton}>
                <PrimaryButton
                  name="Reject"
                  onClick={props.rejectDivorceHandler}
                />
              </div>
              <div className={classes.objectedPendingSpouseButton}>
                <PrimaryButton
                  name="Objection"
                  onClick={props.objectDivorceHandler}
                />
              </div>
              <div className={classes.exitPendingSpouseButton}>
                <PrimaryButton name="Close" onClick={props.exitHandler} />
              </div>
            </div>
          </section>
        ))}
      {props.type == 'completed' &&
        (props.role == 'spouse' || props.role == 'admin') && (
          <section className={classes.options}>
            <div className={classes.completedLawyerOptions}>
              <PrimaryButton name="Close" onClick={props.exitHandler} />
            </div>
          </section>
        )}
    </div>
  );
}

export default FullDivorceOptions;
