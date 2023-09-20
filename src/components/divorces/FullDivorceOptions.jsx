import classes from './FullDivorceOptions.module.css';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
function FullDivorceOptions(props) {
  return (
    <div>
      {/* Lawyer Options */}
      {props.type == 'draft' &&
        localStorage.getItem('userRole') == 'lawyer' &&
        props.page != 'responsePage' && (
          <section className={classes.options}>
            <div className={classes.draftLawyerOptions}>
              <div className={classes.cancelPendingLawyerButton}>
                {/* {props.edit == true && (
                  <PrimaryButton name="Edit" onClick={props.editHandler} />
                )} */}
              </div>
              <div className={classes.exitPendingLawyerButton}>
                <PrimaryButton name="save" onClick={props.saveHandler} />
              </div>
              <div className={classes.remindPendingLawyerButton}>
                <PrimaryButton name="Exit" onClick={props.exitHandler} />
              </div>
            </div>
          </section>
        )}
      {props.type == 'pending' &&
        localStorage.getItem('userRole') == 'lawyer' && (
          // props.page !='responsePage'
          <section className={classes.options}>
            <div className={classes.pendingLawyerOptions}>
              <div className={classes.cancelPendingLawyerButton}>
                {/* <PrimaryButton
                name="Cancel Divorce"
                onClick={props.deleteHandler}
              /> */}
              </div>
              <div className={classes.exitPendingLawyerButton}>
                <ReminderButton onClick={props.reminderHandler} />
              </div>
              <div className={classes.remindPendingLawyerButton}>
                <PrimaryButton name="Exit" onClick={props.exitHandler} />
              </div>
              <div className={classes.editPendingLawyerButton}>
                {/* <PrimaryButton name="Edit" onClick={props.editHandler} /> */}
              </div>
            </div>
          </section>
        )}
      {(props.type == 'completed' || props.type == undefined) &&
        localStorage.getItem('userRole') == 'lawyer' &&
        props.page != 'responsePage' && (
          <section className={classes.options}>
            <div className={classes.completedLawyerOptions}>
              <PrimaryButton name="Close" onClick={props.exitHandler} />
            </div>
          </section>
        )}
      {/* Notary options */}
      {props.type == 'pending' &&
        localStorage.getItem('userRole') == 'notary' && (
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
      {props.type == 'completed' &&
        localStorage.getItem('userRole') == 'notary' && (
          <section className={classes.options}>
            <div className={classes.completedLawyerOptions}>
              <PrimaryButton name="Close" onClick={props.exitHandler} />
            </div>
          </section>
        )}
      {/* Spouse Options */}
      {props.type == 'pending' &&
        localStorage.getItem('userRole') == 'spouse' && (
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
        )}
      {/* Spouse Options */}
      {props.type == 'pending' &&
        props.page == 'responsePage' &&
        localStorage.getItem('userRole') == 'lawyer' && (
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
        )}
      {/* ADMIN OPTIONS */}
      {
        (props.type == 'completed' || props.type == undefined) &&
          (localStorage.getItem('userRole') == 'spouse' ||
            localStorage.getItem('userRole') == 'admin') && (
            <section className={classes.options}>
              <div className={classes.completedLawyerOptions}>
                <PrimaryButton name="Close" onClick={props.exitHandler} />
              </div>
            </section>
          )
        // )
      }
    </div>
  );
}

export default FullDivorceOptions;
