import classes from './FullUser.module.css';
import DivorceLayout from '../layout/DivorceLayout';
import Card from '../ui/Card';
import Overlay from '../ui/Overlay';
import PrimaryButton from '../ui/PrimaryButton';

function FullUser(props) {
  //fetch Full User data

  // EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    props.formState(false);
  }

  function acceptRegistrationHandler(event) {
    event.preventDefault();
    console.log('Accept registration Butotn clicked');
  }
  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.fullUser}>
            <section className={classes.user}>
              <div className={classes.fullName}>
                <h1>Katerina Konstantidi</h1>
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
            <section className={classes.userData}>
              <div className={classes.infoContext}>
                <label>Tax Number</label>
                <p>123456</p>
              </div>
              <div className={classes.infoContext}>
                <label>Identity Card Number</label>
                <p>AG 3456</p>
              </div>
              <div className={classes.infoContext}>
                <label>Email</label>
                <p>123456</p>
              </div>
              <div className={classes.infoContext}>
                <label>Phone Number</label>
                <p>6985637584</p>
              </div>
              <div className={classes.infoContext}>
                <label>Role</label>
                <p>Lawyer</p>
              </div>
            </section>
            <section className={classes.options}>
              <PrimaryButton name="disable user" />
              {props.status == 'PENDING_REGISTRATION' && (
                <PrimaryButton name="Accept Registration" />
              )}
            </section>
            {/* {isEdit && (
              <EditProfileForm isShown={isEdit} formState={openForm} />
            )} */}
          </div>
        </DivorceLayout>
      </Card>
    </Overlay>
  );
}

export default FullUser;
