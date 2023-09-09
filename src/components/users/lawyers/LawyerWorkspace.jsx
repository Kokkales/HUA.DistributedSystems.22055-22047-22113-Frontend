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

function LawyerWorkspace(props) {
  const [loadedDraft, setLoadedDraft] = useState([]);
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(props.role);
  // GET some divorce information

  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('http://localhost:3000/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/myDivorces?role=LAWYER&tax'
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
    event.preventDefault();
    console.log('Admin search button clicked');
    console.log(searchText);
    async function findDivorces(divorceId) {
      console.log('find Divorce: ' + typeof divorceId);
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/findById?id=' + searchText
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
        console.log('The results are: ' + searchResults);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    findDivorces();
    findDivorces(searchText);
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
      <section className={classes.draftDivorces}>
        <h1 className={classes.satustTitle}>Draft</h1>
        <div className={classes.divorceList}>
          <DivorceList
            items={loadedDraft}
            type="draft"
            role={props.role}
            id="1"
          />
          {/* <DivorceItem /> */}
          {loadedDraft.length === 0 && <p>There are no Draft divorces</p>}
        </div>
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceList items={loadedPending} role={props.role} type="pending" />
          {/* <DivorceItem type="pending" role={props.role} /> */}
          {loadedPending.length === 0 && <p>There are no Pending divorces</p>}
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.statusTitle}>Closed</h1>
        <div className={classes.divorceList}>
          <DivorceList
            items={loadedCompleted}
            role={props.role}
            type="completed"
          />
          {/* <DivorceItem type="completed" role={props.role} /> */}
          {loadedCompleted.length === 0 && (
            <p>There are no Completed divorces yet</p>
          )}
        </div>
      </section>
      {searchResults.length != 0 && <SearchResults items={searchResults} />}
    </div>
  );
}

export default LawyerWorkspace;
