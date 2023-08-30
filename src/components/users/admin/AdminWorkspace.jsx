import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './AdminWorkspace.module.css';
// import CompletedDivorceList from '../../divorces/CompletedDivorceList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DivorceItem from '../../divorces/DivorceItem';
import UserItem from '../UserItem';
import UserList from '../UserList';
import DivorceList from '../../divorces/DivorceList';
import ErrorNotification from '../../ui/ErrorNotification';
import SuccesfullMessageNotification from '../../ui/SuccesfullMessageNotification';

function AdminWorkspace(props) {
  const [loadedDivorces, setLoadedDivorces] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const divorces = fetch('http://localhost:8887/divorce/findAll').then(
      (res) => res.json()
    );
    const users = fetch('http://localhost:8887/user/findall').then((res) =>
      res.json()
    );
    Promise.all([divorces, users]).then((values) => {
      const dataOne = values[0];
      const dataTwo = values[1];
      console.log('Divorce response: ' + dataOne);
      console.log('Users response: ' + dataTwo);
      const divorces = [];
      for (const key in dataOne) {
        const divorce = {
          key: key,
          ...dataOne[key],
        };
        divorces.push(divorce);
        setLoadedDivorces(divorces);
      }
      console.log(divorces);
      const users = [];
      for (const key in dataTwo) {
        const user = {
          key: key,
          ...dataTwo[key],
        };
        users.push(user);
      }
      setLoadedUsers(users);
      console.log('Loaded Users: ' + loadedUsers);
    });
  }, []);

  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/new-divorce');
    console.log('New divorce button clicked');
  }

  function searchDivorceHandler(event) {
    event.preventDefault();
    console.log('search button clicked');
  }

  function statisticsPageSender(event) {
    event.preventDefault();
    console.log('statistics paf=ge button clicked');
    navigate('/admin/workspace/statistics');
  }
  return (
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <div className={classes.statisticsBox}>
          <PrimaryButton name="Statistics" onClick={statisticsPageSender} />
        </div>
        <div className={classes.searchDivorceBox}>
          <SearchBar type="text" placeholder="Search Divorce" />
          <PrimaryButton name="Search" onClick={searchDivorceHandler} />
        </div>
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Users</h1>
        <div className={classes.divorceList}>
          <UserList items={loadedUsers} role="admin" />

          {/* <CompletedDivorceList items={loadedDivorces} /> */}
          {/* <UserItem /> */}
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Divorces</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedDivorces} role="admin" type="completed" />
          {/* <DivorceItem role="admin" type="completed" /> */}
        </div>
      </section>
      {/* {true && <ErrorNotification />} */}
      {true && <SuccesfullMessageNotification />}
    </div>
  );
}

export default AdminWorkspace;
