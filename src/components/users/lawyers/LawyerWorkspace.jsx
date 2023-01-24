import { useNavigate } from 'react-router-dom';
import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
// import TextField from '../../ui/TextField';
import classes from './LawyerWorkspace.module.css';

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

  // function AllDivorcesHandler(event) {
  //   event.preventDefault();
  //   console.log('All divorces button clicked');
  // }

  function searchDivorceHandler(event) {
    event.preventDefault();
    console.log('Search divorce button clicked');
    //pop ups a window with relative
  }
  function pendingDivorceHandlerOnClickShow(event) {
    event.preventDefault();
    console.log('Pending divorce button clicked');
    //shows in the screen the pending divorce and the reasons why it is pending
    //(1.lawyer2 acception, spouse2 acception, spouse1 acception, notary acception)
  }
  function draftDivorceHandlerOnClickShow(event) {
    event.preventDefault();
    console.log('Draft divorce button clicked');
    //shows in the screen the draft version of the divorce with options to complete and change fields and set the status as pending (because it will waits for users to accept the divorce)
  }
  function completedHandlerOnClickShow(event) {
    event.preventDefault();
    console.log('Completed divorce button clicked');
    //shows in the screen the completed divorce (maybe it will have download pdf option)
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
      <section className={classes.pendingDivorces}>
        <h1 className={classes.satustTitle}>Draft</h1>
        <div className={classes.divorceList}>
          {/* <DraftDivorceList items={draftLoadedDivorces} /> */}
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
          <DivorceItem onClick={draftDivorceHandlerOnClickShow} />
        </div>
      </section>
      <section className={classes.acceptedDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          {/* <PendingDivorceList items={pendingLoadedDivorces} onClick={pendingDivorceHandlerOnClickShow}/> */}
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
          <DivorceItem onClick={pendingDivorceHandlerOnClickShow} />
        </div>
      </section>
      <section className={classes.rejectedDivorces}>
        <h1 className={classes.satustTitle}>Closed</h1>
        <div className={classes.divorceList}>
          {/* <CompletedDivorceList items={completedLoadedDivorces} /> */}
          <DivorceItem onClick={completedHandlerOnClickShow} />
          <DivorceItem onClick={completedHandlerOnClickShow} />
        </div>
      </section>
    </div>
  );
}

export default LawyerWorkspace;
