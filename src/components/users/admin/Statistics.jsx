import classes from './Statistics.module.css';
import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
// import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

function Statistics(props) {
  //   const [numberOfUsers, setNumberOfUsers] = useState(0);
  //   const [numberOfEnabledUsers, setNumberOfEnabledUsers] = useState(0);
  //   const [numberOfDisabledUsers, setNumberOfDisabledUsers] = useState(0);
  //   const [numberOfPendingApprovalUsers, setNumberOfPendingApprovalUsers] =
  //     useState(0);
  //   const [
  //     numberOfPendingRegistrationUsers,
  //     setNumberOfPendingRegistrationUsers,
  //   ] = useState(0);

  //   useEffect(() => {
  //     const users = fetch('http://localhost:8887/statistics/users').then((res) =>
  //       res.json()
  //     );
  //     const active = fetch('http://localhost:8887/statistics/users/active').then(
  //       (res) => res.json()
  //     );
  //     const inactive = fetch(
  //       'http://localhost:8887/statistics/users/inactive'
  //     ).then((res) => res.json());
  //     const pendingRegistration = fetch(
  //       'http://localhost:8887/statistics/users/pendingRegistration'
  //     ).then((res) => res.json());
  //     const pendingApproval = fetch(
  //       'http://localhost:8887/statistics/users/pendingApproval'
  //     ).then((res) => res.json());
  //     Promise.all([
  //       users,
  //       active,
  //       inactive,
  //       pendingRegistration,
  //       pendingApproval,
  //     ]).then((values) => {
  //       setNumberOfUsers(values[0]);
  //       setNumberOfEnabledUsers(values[1]);
  //       setNumberOfDisabledUsers(values[2]);
  //       setNumberOfPendingApprovalUsers(values[3]);
  //       setNumberOfPendingRegistrationUsers(values[4]);
  //     });
  //   }, []);
  //   console.log('Number of Users: ' + numberOfUsers);
  //   console.log('Number of active Users: ' + numberOfEnabledUsers);
  //   console.log('Number of inactive Users: ' + numberOfDisabledUsers);
  //   console.log(
  //     'Number of pending approval Users: ' + numberOfPendingApprovalUsers
  //   );
  //   console.log(
  //     'Number of pending registration Users: ' + numberOfPendingRegistrationUsers
  //   );

  //   const series = [{
  //     data: [numberOfEnabledUsers, numberOfDisabledUsers, numberOfPendingApprovalUsers, numberOfPendingRegistrationUsers]
  // }];

  // const data = [
  //   {quarter: 1, earnings: numberOfDisabledUsers},
  //   {quarter: 2, earnings: numberOfPendingApprovalUsers},
  //   {quarter: 3, earnings: numberOfPendingRegistrationUsers},
  //   {quarter: 4, earnings: numberOfEnabledUsers}
  // ];

  return (
    <div className={classes.Statistics}>
      {/* <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Disabled", "Pending Approval", "Registration", "Enabled"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`${x / 0.5}`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart></div> */}
    </div>
  );
}
export default Statistics;
