import classes from './FullUser.module.css';
import DivorceLayout from '../layout/DivorceLayout';
import Card from '../ui/Card';
import Overlay from '../ui/Overlay';
import PrimaryButton from '../ui/PrimaryButton';
import EditProfileForm from './EditProfileForm';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function FullUser(props) {
  const [isEdit, setIsEdit] = useState(false);
  //fetch Full User data
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [isEnable, setIsEnable] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isAccept, setIsAccept] = useState(false);

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
    console.log('USER ID: ' + props.userId);
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/user/find?taxNumber=' + props.userId,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        const data = response.data;
        console.log('OK I AM MAD: ' + JSON.stringify(data));
        setUserData(data);
        // props.takeUserRole(data.role);
        console.log('THE ROLE IS: ' + data.role);
        console.log(data.userStatus);
        setIsDisable(data.userStatus === 'ENABLED');
        setIsEnable(data.userStatus === 'DISABLED');
        setIsAccept(data.userStatus === 'PENDING_APPROVAL');
        // setLoadedDivorces(divorces);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);
  // EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    props.formState(false);
  }

  async function acceptRegistrationHandler(event) {
    event.preventDefault();
    console.log('Accept registration Butotn clicked');
    try {
      const response = await axios.post(
        'http://localhost:8887/user/enableAccess?taxNumber=' + props.userId,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
      setIsAccept(false);
      setIsEnable(false);
      setIsDisable(true);
      // navigate('');
      window.location.reload();
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  async function disableHandler(event) {
    event.preventDefault();
    console.log('Disable button clicked');
    try {
      const response = await axios.post(
        'http://localhost:8887/user/disableAccess?taxNumber=' + props.userId,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
      setIsAccept(false);
      setIsEnable(true);
      setIsDisable(false);
      // navigate('');
      window.location.reload();
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  function openForm() {
    setIsEdit(false);
  }
  function editProfileHandler(event) {
    event.preventDefault();
    //link to edit profile form
    setIsEdit(true);
    console.log('Edit button clicked');
  }
  return (
    <Overlay>
      <Card>
        {/* <DivorceLayout> */}
        <div className={classes.fullUser}>
          <section className={classes.user}>
            <div className={classes.fullName}>
              <h1>{userData.firstName + ' ' + userData.lastName}</h1>
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
              <p>{userData.taxNumber}</p>
            </div>
            <div className={classes.infoContext}>
              <label>Identity Card Number</label>
              <p>{userData.identityCardNumber} </p>
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
          </section>
          <section className={classes.options}>
            {isDisable && (
              <PrimaryButton name="Disable" onClick={disableHandler} />
            )}
            {isEnable && (
              <PrimaryButton
                name="Enable"
                onClick={acceptRegistrationHandler}
              />
            )}
            {/* {props.status == 'PENDING_REGISTRATION' && ( */}
            {isAccept && (
              <PrimaryButton
                name="Accept"
                onClick={acceptRegistrationHandler}
              />
            )}
            {/* )} */}
            <PrimaryButton name="Edit" onClick={editProfileHandler} />
          </section>
          {isEdit && (
            <EditProfileForm
              isShown={isEdit}
              formState={openForm}
              data={userData}
            />
          )}
        </div>
        {/* </DivorceLayout> */}
      </Card>
    </Overlay>
  );
}

export default FullUser;
