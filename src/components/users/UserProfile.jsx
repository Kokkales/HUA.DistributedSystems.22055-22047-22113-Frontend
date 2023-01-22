import PrimaryButton from '../ui/PrimaryButton';
import classes from './UserProfile.module.css';

function UserProfile(props) {
  return (
    <div className={classes.profile}>
      {/* <div className={classes.fullName}> */}
      <h1>Katerina Konstantidi</h1>
      {/* </div> */}
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
        <div className={classes.infoContext}>
          {/* <PrimaryButton>
            <button>Edit Profile</button>
          </PrimaryButton> */}
          <div className={classes.editButton}>
            <PrimaryButton name="Edit Profile" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
