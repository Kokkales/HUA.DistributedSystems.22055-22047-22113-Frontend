import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './NotaryWorkspace.module.css';
import DivorceList from '../../divorces/DivorceList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DivorceItem from '../../divorces/DivorceItem';
import SearchResults from '../SearchResults';
import ErrorNotification from '../../ui/ErrorNotification';

function NotaryWorkspace(props) {
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isResults, setIsResults] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSuccesfull, setIsSuccesfull] = useState(false);
  const navigate = useNavigate();

  //GET some divorce information
  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/myDivorces?role=NOTARY',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        const data = response.data;
        // console.log(data);
        console.log('ok');
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

  function searchDivorceHandler(event) {
    if (token) {
      //code
    } else {
      navigate('/');
    }
    event.preventDefault();
    console.log('Admin search button clicked');
    console.log(searchText);
    async function findDivorces() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/search?query=' +
            encodeURIComponent(searchText),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              // 'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        const data = response.data;
        console.log('Found : ' + data);
        const divorces = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          divorces.push(divorce);
        }
        setSearchResults(divorces);
        console.log('resuults' + searchResults.length);
        if (searchResults.length != 0) {
          setIsResults(true);
        }
        console.log('The results are: ' + searchResults);
      } catch (error) {
        console.log('ERROR: ', error);
        setIsError('No Results');
        const timer = setTimeout(() => {
          setIsError('');
        }, 3000);

        return () => clearTimeout(timer);
      }
    }
    findDivorces();
    // findDivorces(searchText);
  }

  function closeResults(event) {
    setIsResults(false);
  }

  return (
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <SearchBar type="text" placeholder="Search Divorce" />
        <PrimaryButton name="Search" onClick={searchDivorceHandler} />
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedPending} role="notary" type="pending" />
          {/* <DivorceItem type="pending" role={props.role} /> */}
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Completed</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedCompleted} type="completed" role="notary" />
          {/* <DivorceItem type="completed" role={props.role} /> */}
        </div>
      </section>
      {isResults && (
        <SearchResults
          role="notary"
          items={searchResults}
          closeResults={closeResults}
        />
      )}
      {isError == 'No Results' && <ErrorNotification message="No Results" />}
    </div>
  );
}

export default NotaryWorkspace;
