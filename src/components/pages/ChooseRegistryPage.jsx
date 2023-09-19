import LoginLayout from '../layout/auth_layout/LoginLayout';
import classes from './ChooseRegistryPage.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function ChooseRegistryPage(props) {
  // const { state } = useLocation();
  // const { data } = state; // Read values passed on state
  // console.log('Choose: ' + data);
  const navigate = useNavigate();

  const token = localStorage.getItem('jwtToken');
  const [userData, setUserData] = useState({});
  useEffect(() => {
    console.log('tthe token is:' + token);
    if (token) {
      //code here
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
        // props.takeUserRole(data.role);
        console.log('THE ROLE IS: ' + data.role);
        // setLoadedDivorces(divorces);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);

  function sentToLAWYERProfileHandler(event) {
    event.preventDefault();
    localStorage.setItem('userRole', 'lawyer');
    navigate('/profile/lawyer');
  }
  function sentToSPOUSEProfileHandler(event) {
    event.preventDefault();
    localStorage.setItem('userRole', 'spouse');
    navigate('/profile/spouse');
  }
  function sentToNOTARYProfileHandler(event) {
    event.preventDefault();
    localStorage.setItem('userRole', 'notary');
    navigate('/profile/notary');
  }
  function sentToADMINProfileHandler(event) {
    event.preventDefault();
    localStorage.setItem('userRole', 'admin');
    navigate('/profile/admin');
  }

  return (
    <LoginLayout>
      <div className={classes.chooseFacultyForm}>
        <div className={classes.title}>
          <h1>Choose Faculty</h1>
        </div>
        {userData.role == 'LAWYER' && (
          <div className={classes.lawyer} onClick={sentToLAWYERProfileHandler}>
            <div className={classes.facultySvg}>
              <svg
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <div className={classes.facultyTitle}>
              <h2>Lawyer</h2>
            </div>
          </div>
        )}
        {userData.role == 'NOTARY' && (
          <div className={classes.notary} onClick={sentToNOTARYProfileHandler}>
            <div className={classes.facultySvg}>
              <svg
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div className={classes.facultyTitle}>
              <h2>Notary</h2>
            </div>
          </div>
        )}
        {(userData.role == 'SPOUSE' || userData.role == 'SPOUSE_ADMIN') && (
          <div className={classes.spouse} onClick={sentToSPOUSEProfileHandler}>
            <div className={classes.facultySvg}>
              <svg
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>
            </div>
            <div className={classes.facultyTitle}>
              <h2>Spouse</h2>
            </div>
          </div>
        )}
        {(userData.role == 'ADMIN' || userData.role == 'SPOUSE_ADMIN') && (
          <div className={classes.lawyer} onClick={sentToADMINProfileHandler}>
            <div className={classes.facultySvg}>
              <svg
                width="40"
                height="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </div>
            <div className={classes.facultyTitle}>
              <h2>Admin</h2>
            </div>
          </div>
        )}
      </div>
    </LoginLayout>
  );
}

export default ChooseRegistryPage;
