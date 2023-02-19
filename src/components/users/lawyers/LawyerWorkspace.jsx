import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './LawyerWorkspace.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import DraftDivorceList from '../../divorces/DraftDivorceList';
import PendingDivorceList from '../../divorces/PendingDivorceList';
import CompletedDivorceList from '../../divorces/CompletedDivorceList';
import DivorceItem from '../../divorces/DivorceItem';

function LawyerWorkspace(props) {
  const [loadedDraft, setLoadedDraft] = useState([]);
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  console.log(props.role);
  //GET some divorce information
  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetch('http://localhost:8887/divorce/myDivorces?taxNumber=123456789')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('ok');
  //       console.log(data);
  //       const drafts = [];
  //       const pendings = [];
  //       const completed = [];
  //       for (const key in data) {
  //         const divorce = {
  //           key: key,
  //           ...data[key],
  //         };
  //         if (data[key].status === 'Pending') {
  //           pendings.push(divorce);
  //         }
  //         if (data[key].status === 'Draft') {
  //           drafts.push(divorce);
  //         }
  //         if (
  //           data[key].status === 'Completed' ||
  //           data[key].status === 'Cancelled'
  //         ) {
  //           completed.push(divorce);
  //         }
  //         // meetups.push(meetup);
  //       }
  //       console.log('Drafts: ' + drafts);
  //       console.log('Pendings: ' + pendings);
  //       console.log('Completed: ' + completed);
  //       // setIsLoading(false);
  //       setLoadedDraft(drafts);
  //       setLoadedPending(pendings);
  //       setLoadedComlpeted(completed);
  //     });
  // }, []);

  const navigate = useNavigate();
  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/new-divorce');
    console.log('New divorce button clicked');
  }

  //TODO search logic
  function searchDivorceHandler(event) {}

  return (
    <div className={classes.workspace}>
      <section className={classes.newDivorces}>
        <PrimaryButton name="New Divorce" onClick={newDivorceHandler} />
      </section>
      <section className={classes.findDivorces}>
        <div className={classes.searchBox}>
          <SearchBar type="text" placeholder="Search Divorce" />
          <PrimaryButton name="Search" onClick={searchDivorceHandler} />
        </div>
      </section>
      <section className={classes.draftDivorces}>
        <h1 className={classes.satustTitle}>Draft</h1>
        <div className={classes.divorceList}>
          {/* <DraftDivorceList items={loadedDraft} /> */}
          <DivorceItem type="draft" role={props.role} />
        </div>
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          {/* <PendingDivorceList items={loadedPending} role={props.role} /> */}
          <DivorceItem type="pending" role={props.role} />
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.satustTitle}>Closed</h1>
        <div className={classes.divorceList}>
          {/* <CompletedDivorceList items={loadedCompleted} /> */}
          <DivorceItem type="completed" role={props.role} />
        </div>
      </section>
    </div>
  );
}

export default LawyerWorkspace;
