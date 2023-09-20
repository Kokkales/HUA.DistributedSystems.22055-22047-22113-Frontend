import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './SpouseWorkspace.module.css';
// import PendingDivorceList from '../../divorces/PendingDivorceList';
// import CompletedDivorceList from '../../divorces/CompletedDivorceList';
import DivorceList from '../../divorces/DivorceList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DivorceItem from '../../divorces/DivorceItem';
// import { useNavigate } from 'react-router-dom';
function SpouseWorkspace(props) {
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/myDivorces?role=SPOUSE%0A',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        const data = response.data;
        console.log(data);
        const pendings = [];
        const completed = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          if (data[key].status === 'Pending') {
            pendings.push(divorce);
          }
          if (
            data[key].status === 'Completed' ||
            data[key].status === 'Cancelled'
          ) {
            completed.push(divorce);
          }
          // meetups.push(meetup);
        }
        console.log('Pendings: ' + pendings);
        console.log('Completed: ' + completed);
        // setIsLoading(false);
        setLoadedPending(pendings);
        setLoadedComlpeted(completed);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }

    fetchData();
  }, []);

  function searchDivorceHandler(event) {}
  return (
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <SearchBar type="text" placeholder="Search Divorce" />
        <PrimaryButton name="Search" />
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedPending} role="spouse" type="pending" />
          {/* <DivorceList items={loadedPending} role="spouse" type="pending" /> */}
          {/* <DivorceItem role={props.role} type="pending" /> */}
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Completed</h1>
        <div className={classes.divorceList}>
          <DivorceList
            items={loadedCompleted}
            role="spouse"
            type="completed"
            page="responsePage"
          />

          {/* <DivorceItem role={props.role} type="completed" /> */}
        </div>
      </section>
    </div>
  );
}

export default SpouseWorkspace;
