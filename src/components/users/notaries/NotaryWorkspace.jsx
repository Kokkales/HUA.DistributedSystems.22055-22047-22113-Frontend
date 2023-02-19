import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './NotaryWorkspace.module.css';
import PendingDivorceList from '../../divorces/PendingDivorceList';
import CompletedDivorceList from '../../divorces/CompletedDivorceList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DivorceItem from '../../divorces/DivorceItem';

function NotaryWorkspace(props) {
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  const navigate = useNavigate();

  //GET some divorce information
  // useEffect(() => {
  //   // setIsLoading(true);
  //   fetch(
  //     'http://localhost:8887/divorce/myDivorces?taxNumber=123456789?faculty=NOTARY'
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('ok');
  //       console.log(data);
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
  //         if (
  //           data[key].status === 'Completed' ||
  //           data[key].status === 'Cancelled'
  //         ) {
  //           completed.push(divorce);
  //         }
  //         // meetups.push(meetup);
  //       }
  //       console.log('Pendings: ' + pendings);
  //       console.log('Completed: ' + completed);
  //       // setIsLoading(false);
  //       setLoadedPending(pendings);
  //       setLoadedComlpeted(completed);
  //     });
  // }, []);

  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/new-divorce');
    console.log('New divorce button clicked');
  }

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
          {/* <PendingDivorceList items={loadedPending} /> */}
          <DivorceItem type="pending" role={props.role} />
        </div>
      </section>
      <section className={classes.closedDivorces}>
        <h1 className={classes.statusTitle}>Completed</h1>
        <div className={classes.divorceList}>
          {/* <CompletedDivorceList
            items={loadedCompleted}
            type="completed"
            role={props.role}
          /> */}
          <DivorceItem type="completed" role={props.role} />
        </div>
      </section>
    </div>
  );
}

export default NotaryWorkspace;
