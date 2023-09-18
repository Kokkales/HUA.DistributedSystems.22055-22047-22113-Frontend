import PrimaryButton from '../ui/PrimaryButton';
import classes from './UserProfile.module.css';
import EditProfileForm from './EditProfileForm.jsx';
import { useState, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom';
import { RedirectFunction } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function UserProfile(props) {
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const [isEdit, setIsEdit] = useState(false);
  const token = localStorage.getItem('jwtToken');
  const [userData, setUserData] = useState({});

  // Check if the token is not present (user is not authenticated)
  // GET profile data
  useEffect(() => {
    console.log('tthe token is:' + token);
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log('ANSWER: ' + JSON.stringify(decodedToken));
    } else {
      // Redirect to the login page if the token is not present
      // history.push('http://localhost:3000/');
      navigate('http://localhost:3000/');
    }
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8887/user', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        });
        const data = response.data;
        console.log('OK I AM MAD: ' + JSON.stringify(data));
        setUserData(data);
        //TODO now in user Data in the role I have to put the parameter that the choose registry page sent me
        props.takeUserRole(data.role);
        console.log('THE ROLE IS: ' + data.role);
        // setLoadedDivorces(divorces);
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
      <h1>
        {userData.lastName} {userData.firstName}
      </h1>
      {/* </div> */}
      <section className={classes.userData}>
        <div className={classes.infoContext}>
          <label>Tax Number</label>
          <p>{userData.taxNumber}</p>
        </div>
        <div className={classes.infoContext}>
          <label>ID Number</label>
          <p>{userData.identityCardNumber}</p>
        </div>
        <div className={classes.infoContext}>
          <label>Email</label>
          <p>{userData.email}</p>
        </div>
        <div className={classes.infoContext}>
          <label>Phone Number</label>
          <p>{userData.phoneNumber}</p>
        </div>
        <div className={classes.infoContext}>
          <label>Role</label>
          <p>{userData.role}</p>
        </div>
        <div className={classes.editButton}>
          <PrimaryButton name="Edit Profile" onClick={editProfileHandler} />
        </div>
      </section>
      {isEdit && (
        <EditProfileForm
          isShown={isEdit}
          formState={openForm}
          data={userData}
        />
      )}
    </div>
  );
}

export default UserProfile;
