import PrimaryButton from '../ui/PrimaryButton';
import classes from './UserProfile.module.css';
import EditProfileForm from './EditProfileForm.jsx';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProfile(props) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);

  // GET profile data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/user/?taxNumber=1'
        );
        const data = response.data;
        // console.log(data);
        const divorces = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          divorces.push(divorce);
          // setLoadedDivorces(divorces);
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);

  function editProfileHandler(event) {
    event.preventDefault();
    //link to edit profile form
    setIsEdit(true);
    console.log('Edit button clicked');
  }

  function openForm() {
    setIsEdit(false);
  }

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
          <label>ID Number</label>
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
        <div className={classes.editButton}>
          <PrimaryButton name="Edit Profile" onClick={editProfileHandler} />
        </div>
      </section>
      {isEdit && <EditProfileForm isShown={isEdit} formState={openForm} />}
    </div>
  );
}

export default UserProfile;
