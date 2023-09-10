import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './AdminWorkspace.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DivorceItem from '../../divorces/DivorceItem';
import UserItem from '../UserItem';
import UserList from '../UserList';
import DivorceList from '../../divorces/DivorceList';
import ErrorNotification from '../../ui/ErrorNotification';
import SuccesfullMessageNotification from '../../ui/SuccesfullMessageNotification';
import axios from 'axios';
import SearchResults from '../SearchResults';
function AdminWorkspace(props) {
  const [loadedDivorces, setLoadedDivorces] = useState([]);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isResults, setIsResults] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSuccesfull, setIsSuccesfull] = useState(false);

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/findAll',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        // http://localhost:8887/divorce/findAll
        const data = response.data;
        // console.log(data);
        const divorces = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          divorces.push(divorce);
          setLoadedDivorces(divorces);
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/user/findall?=',
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
        const users = [];
        for (const key in data) {
          const user = {
            key: key,
            ...data[key],
          };
          users.push(user);
        }
        setLoadedUsers(users);
        console.log('Loaded Users: ' + loadedUsers);
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
        } else {
          setIsResults(false);
          setIsError('No Results');
          const timer = setTimeout(() => {
            setIsError('');
          }, 3000);
          return () => clearTimeout(timer);
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
    console.log('LOOKING FOR DIVORCES');
    findDivorces();
    // findDivorces(searchText);
  }

  function closeResults(event) {
    setIsResults(false);
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
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Divorces</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedDivorces} role="admin" type="completed" />
        </div>
      </section>
      {isResults && (
        <SearchResults
          role="admin"
          items={searchResults}
          closeResults={closeResults}
        />
      )}
      {isError == 'No Results' && <ErrorNotification message="No Results" />}
    </div>
  );
}

export default AdminWorkspace;
