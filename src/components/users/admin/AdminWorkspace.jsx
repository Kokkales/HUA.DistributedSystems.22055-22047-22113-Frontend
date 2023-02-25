import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './AdminWorkspace.module.css';
import CompletedDivorceList from '../../divorces/CompletedDivorceList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DivorceItem from '../../divorces/DivorceItem';
import UserItem from '../UserItem';
import UserList from '../UserList';

function AdminWorkspace(props) {
  const [loadedDivorces, setLoadedDivorces] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const navigate = useNavigate();

  //GET some divorce information
  useEffect(() => {
    // setIsLoading(true);
    fetch('http://localhost:8887/divorce/findall', { mode: 'no-cors' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('ok');
        console.log(data);
        //TODO load users too
        const divorces = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          divorces.push(divorce);
        }
        console.log('Divorces: ' + divorces);
        // setIsLoading(false);
        setLoadedDivorces(divorces);
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
        <SearchBar type="text" placeholder="Search Divorce" />
        <PrimaryButton name="Search" onClick={searchDivorceHandler} />
        <PrimaryButton name="Statistics" onClick={statisticsPageSender} />
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Users</h1>
        <div className={classes.divorceList}>
          <UserList />
          {/* <CompletedDivorceList items={loadedDivorces} /> */}
          <UserItem />
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Divorces</h1>
        <div className={classes.divorceList}>
          <CompletedDivorceList items={loadedDivorces} />
          <DivorceItem role="admin" type="completed" />
        </div>
      </section>
    </div>
  );
}

export default AdminWorkspace;
