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

function LawyerWorkspace(props) {
  // 1. create useState([]) for draft,pending and completed divorces
  // 2. Fetch all the divorces from backend with a get request (useEffect())
  //3. seperate divorces depending on their status: pending, draft, completed, cancelled and put them to different lists
  //4. save each list to useState list variable e.g if we have -> [dreaftLoadedDivorces,setDraftLoadedDivorces] and get request saves to draftDivorces the drafts the the code is: setDraftLoadedDivorces(draftDivorces);

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
          {/* <DraftDivorceList items={draftLoadedDivorces} /> */}
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
        </div>
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          {/* <PendingDivorceList items={pendingLoadedDivorces} onClick={pendingDivorceHandlerOnClickShow}/> */}
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />{' '}
          {/* pass all props including the onClick*/}
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
        </div>
      </section>
      <section className={classes.completedDivorces}>
        <h1 className={classes.satustTitle}>Closed</h1>
        <div className={classes.divorceList}>
          {/* <CompletedDivorceList items={completedLoadedDivorces} /> */}
          <DivorceItem onClick={completedHandlerOnClickShow} />
          <DivorceItem onClick={completedHandlerOnClickShow} />
        </div>
      </section>
      {isPendingWatch && (
        <WatchPendingDivorce isShown={isPendingWatch} formState={openPending} />
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
