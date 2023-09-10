import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './LawyerWorkspace.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import DivorceItem from '../../divorces/DivorceItem';
import SearchResults from '../SearchResults';
import DivorceList from '../../divorces/DivorceList';
import axios from 'axios';
import ErrorNotification from '../../ui/ErrorNotification';

function LawyerWorkspace(props) {
  const [loadedDraft, setLoadedDraft] = useState([]);
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isResults, setIsResults] = useState(false);
  const [isError, setIsError] = useState('');
  const [isSuccesfull, setIsSuccesfull] = useState(false);
  console.log(props.role);
  // GET some divorce information

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
          'http://localhost:8887/divorce/myDivorces?role=LAWYER',
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
        const drafts = [];
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
          if (data[key].status === 'Draft') {
            drafts.push(divorce);
          }
          if (
            data[key].status === 'Completed' ||
            data[key].status === 'Cancelled'
          ) {
            completed.push(divorce);
          }
          // meetups.push(meetup);
        }
        console.log('Drafts: ' + drafts);
        console.log('Pendings: ' + pendings);
        console.log('Completed: ' + completed);
        // setIsLoading(false);
        setLoadedDraft(drafts);
        setLoadedPending(pendings);
        setLoadedComlpeted(completed);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);

  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/new-divorce');
    console.log('New divorce button clicked');
  }
  function toResponseHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/response');
    console.log('New divorce button clicked');
  }

  //TODO search logic
  function handleChange(event) {
    event.preventDefault();
    setSearchText(event.target.value);
    console.log('Type of: ' + typeof searchText);
  }

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
    <div className={classes.workspace}>
      <section className={classes.newDivorces}>
        <PrimaryButton name="New Divorce" onClick={newDivorceHandler} />
        <PrimaryButton name="To Response" onClick={toResponseHandler} />
      </section>
      <section className={classes.findDivorces}>
        <div className={classes.searchBox}>
          <input
            className={classes.searchBar}
            type="text"
            placeholder="search"
            onChange={handleChange}
            value={searchText}
          />
          <PrimaryButton name="Search" onClick={searchDivorceHandler} />
        </div>
      </section>
      {/* <section className={classes.draftDivorces}>
        <h1 className={classes.satustTitle}>Draft</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedDraft} type="draft" role="lawyer" id="1" />
          {/* <DivorceItem /> */}
      {/* {loadedDraft.length === 0 && <p>There are no Draft divorces</p>} */}
      {/* </div> */}
      {/* // </section > * /} */}
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedPending} role="lawyer" type="pending" />
          {/* <DivorceItem type="pending" role={props.role} /> */}
          {loadedPending.length === 0 && <p>There are no Pending divorces</p>}
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Closed</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedCompleted} role="lawyer" type="completed" />
          {/* <DivorceItem type="completed" role={props.role} /> */}
          {loadedCompleted.length === 0 && (
            <p>There are no Completed divorces yet</p>
          )}
        </div>
      </section>
      {isResults && (
        <SearchResults
          role="lawyer"
          items={searchResults}
          closeResults={closeResults}
        />
      )}
      {isError == 'No Results' && <ErrorNotification message="No Results" />}
    </div>
  );
}

export default LawyerWorkspace;
