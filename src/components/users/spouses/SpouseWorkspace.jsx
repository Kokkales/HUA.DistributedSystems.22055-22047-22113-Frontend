import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './SpouseWorkspace.module.css';
import { useState } from 'react';
import WatchCompleteDivorce from '../WatchCompleteDivorce';
import WatchPendingDivorce from '../WatchPendingDivorce';
import { useNavigate } from 'react-router-dom';

function SpouseWorkspace(props) {
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
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <SearchBar type="text" placeholder="Search Divorce" />
        <PrimaryButton name="Search" />
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
        </div>
      </section>
      <section className={classes.closedDivorces}>
        <h1 className={classes.statusTitle}>Completed</h1>
        <div className={classes.divorceList}>
          <DivorceItem onClick={completedHandlerOnClickShow} />
          <DivorceItem onClick={completedHandlerOnClickShow} />
        </div>
      </section>
      {isCompleteWatch && (
        <WatchCompleteDivorce
          isShown={isCompleteWatch}
          formState={openComplete}
        />
      )}
      {isPendingWatch && (
        <WatchPendingDivorce isShown={isPendingWatch} formState={openPending} />
      )}
    </div>
  );
}

export default SpouseWorkspace;
