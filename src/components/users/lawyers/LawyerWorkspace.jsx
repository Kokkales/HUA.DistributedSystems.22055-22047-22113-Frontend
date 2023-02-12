import { useNavigate } from 'react-router-dom';
import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
// import TextField from '../../ui/TextField';
import classes from './LawyerWorkspace.module.css';
import { useState } from 'react';
import WatchPendingDivorce from '../WatchPendingDivorce';
import WatchDraftDivorce from '../WatchDraftDivorce';
import WatchCompleteDivorce from '../WatchCompleteDivorce';
import { useEffect } from 'react';
import DraftDivorceList from '../../divorces/DraftDivorceList';
import PendingDivorceList from '../../divorces/PendingDivorceList';
import CompletedDivorceList from '../../divorces/CompletedDivorceList';

function LawyerWorkspace(props) {
  const [loadedDraft, setLoadedDraft] = useState([]);
  const [loadedPending, setLoadedPending] = useState([]);
  const [loadedCompleted, setLoadedComlpeted] = useState([]);
  let fullDivorce;

  //GET some divorce information
  useEffect(() => {
    // setIsLoading(true);
    fetch('http://localhost:8887/divorce/myDivorces?taxNumber=123456789')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('ok');
        console.log(data);
        const drafts = [];
        const pendings = [];
        const completed = [];
        for (const key in data) {
          const divorce = {
            id: key,
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
        console.log(drafts);
        console.log(pendings);
        console.log(completed);
        // setIsLoading(false);
        setLoadedDraft(drafts);
        setLoadedPending(pendings);
        setLoadedComlpeted(completed);
      });
  }, []);

  const navigate = useNavigate();
  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/workspace/new-divorce');
    console.log('New divorce button clicked');
  }

  const [isPendingWatch, setIsPendingWatch] = useState(false);
  const [isCompleteWatch, setIsCompleteWatch] = useState(false);
  const [isDraftWatch, setIsDraftWatch] = useState(false);
  function searchDivorceHandler(event) {}

  function openPending() {
    setIsPendingWatch(false);
  }
  function openDraft() {
    setIsDraftWatch(false);
  }
  function openComplete() {
    setIsCompleteWatch(false);
  }

  function pendingDivorceHandlerOnClickShow(event) {
    event.preventDefault();
    //request all the information of the certain divorce
    fetch('http://localhost:8887/divorce/findById?id=1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        spouse = data.spouseOneName;
        console.log(spouse);
        // fullDivorce = {
        //   id: data.id,
        //   spouseOne: data.spouseOneName,
        //   spouseTwo: data.spouseTwoName,
        // };
        // console.log(fullDivorce.spouseOne);
        // meetups.push(meetup);
      });
    console.log('Pending divorce button clicked');
    //shows in the screen the pending divorce and the reasons why it is pending
    //(1.lawyer2 acception, spouse2 acception, spouse1 acception, notary acception)
    console.log('Search divorce button clicked');
    //pop ups a window with relative
    setIsPendingWatch(true);
  }
  function draftDivorceHandlerOnClickShow(event) {
    event.preventDefault();
    console.log('Draft divorce button clicked');
    //shows in the screen the draft version of the divorce with options to complete and change fields and set the status as pending (because it will waits for users to accept the divorce)
    setIsDraftWatch(true);
  }
  function completedHandlerOnClickShow(event) {
    event.preventDefault();
    console.log('Completed divorce button clicked');
    //shows in the screen the completed divorce (maybe it will have download pdf option)
    setIsCompleteWatch(true);
  }

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
          <DraftDivorceList
            items={loadedDraft}
            onClick={draftDivorceHandlerOnClickShow}
          />
        </div>
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <PendingDivorceList
            items={loadedPending}
            onClick={pendingDivorceHandlerOnClickShow}
          />
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.satustTitle}>Closed</h1>
        <div className={classes.divorceList}>
          <CompletedDivorceList
            items={loadedCompleted}
            onClick={completedHandlerOnClickShow}
          />
        </div>
      </section>
      {isPendingWatch && (
        <WatchPendingDivorce
          isShown={isPendingWatch}
          spouseok={spouse}
          formState={openPending}
          // spouseTwo={fullDivorce.spouseTwoName}
        />
      )}
      {isDraftWatch && (
        <WatchDraftDivorce isShown={isDraftWatch} formState={openDraft} />
      )}
      {isCompleteWatch && (
        <WatchCompleteDivorce
          isShown={isCompleteWatch}
          formState={openComplete}
        />
      )}
    </div>
  );
}

export default LawyerWorkspace;
