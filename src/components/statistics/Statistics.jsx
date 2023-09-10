import classes from './Statistics.module.css';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import ColumnChart from './ColumnChart';
import NormalChart from './NormalChart';
import PieChart from './PieChart';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

function Statistics(props) {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfEnabledUsers, setNumberOfEnabledUsers] = useState(0);
  const [numberOfDisabledUsers, setNumberOfDisabledUsers] = useState(0);
  const [numberOfPendingApprovalUsers, setNumberOfPendingApprovalUsers] =
    useState(0);
  const [
    numberOfPendingRegistrationUsers,
    setNumberOfPendingRegistrationUsers,
  ] = useState(0);

  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
  }, []);

  const pieData = [
    numberOfUsers,
    numberOfEnabledUsers,
    numberOfDisabledUsers,
    numberOfPendingApprovalUsers,
    numberOfPendingRegistrationUsers,
  ];

  const columnData = [];

  const navigate = useNavigate();

  useEffect(() => {
    console.log('tthe token is:' + token);
    if (token) {
    } else {
      // Redirect to the login page if the token is not present
      // history.push('http://localhost:3000/');
      navigate('http://localhost:3000/');
    }
  }, []);

  async function numOfUsers() {
    //axios call to get the number of users using bearer token and save them to pieData[0]
    const response = await axios.get(
      'http://localhost:8887/statistics/users/pendingRegistration',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNumberOfUsers(response.data.length);
    columnData.push(response.data.length);
  }
  numOfUsers();

  async function numOfEnabledUsers() {
    const response = await axios.get(
      'http://localhost:8887/statistics/users/active',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNumberOfEnabledUsers(response.data.length);
    columnData.push(response.data.length);
  }
  numOfEnabledUsers();
  async function numOfDisabledUsers() {
    const response = await axios.get(
      'http://localhost:8887/statistics/users/inactive',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNumberOfDisabledUsers(response.data.length);
    columnData.push(response.data.length);
  }
  numOfDisabledUsers();
  async function numOfPendingApprovalUsers() {
    const response = await axios.get(
      'http://localhost:8887/statistics/users/pendingApproval',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNumberOfPendingApprovalUsers(response.data.length);
    columnData.push(response.data.length);
  }
  numOfPendingApprovalUsers();
  async function numOfPendingRegistrationUsers() {
    const response = await axios.get(
      'http://localhost:8887/statistics/users/pendingRegistration',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setNumberOfPendingRegistrationUsers(response.data.length);
    columnData.push(response.data.length);
  }
  numOfPendingRegistrationUsers();
  console.log('Number of Users: ' + numberOfUsers);
  console.log('Number of active Users: ' + numberOfEnabledUsers);
  console.log('Number of inactive Users: ' + numberOfDisabledUsers);
  console.log(
    'Number of pending approval Users: ' + numberOfPendingApprovalUsers
  );
  console.log(
    'Number of pending registration Users: ' + numberOfPendingRegistrationUsers
  );

  const series = [
    {
      data: [
        numberOfEnabledUsers,
        numberOfDisabledUsers,
        numberOfPendingApprovalUsers,
        numberOfPendingRegistrationUsers,
      ],
    },
  ];

  const data = [
    { quarter: 1, earnings: numberOfDisabledUsers },
    { quarter: 2, earnings: numberOfPendingApprovalUsers },
    { quarter: 3, earnings: numberOfPendingRegistrationUsers },
    { quarter: 4, earnings: numberOfEnabledUsers },
  ];

  return (
    <div className={classes.Statistics}>
      <div className={classes.diagramInfo}>
        <h1>Statistics</h1>
        <PieChart data={pieData} />
      </div>
      <div className={classes.diagramOne}>
        <ColumnChart data={columnData} />
      </div>
      {/* <div className={classes.diagramTwo}>
        <NormalChart />
      </div> */}
    </div>
    // </div>
  );
}
export default Statistics;

{
  /* <VictoryChart
  // domainPadding will add space to each side of VictoryBar to
  // prevent it from overlapping the axis
  domainPadding={20}
>
  <VictoryAxis
    // tickValues specifies both the number of ticks and where
    // they are placed on the axis
    tickValues={[1, 2, 3, 4]}
    tickFormat={['Disabled', 'Pending Approval', 'Registration', 'Enabled']}
  />
  <VictoryAxis
    dependentAxis
    // tickFormat specifies how ticks should be displayed
    tickFormat={(x) => `${x / 0.5}`}
  />
  <VictoryBar data={data} x="quarter" y="earnings" />
</VictoryChart>; */
}
