import { useNavigate } from 'react-router-dom';
import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
// import TextField from '../../ui/TextField';
import classes from './LawyerWorkspace.module.css';

function LawyerWorkspace(props) {
  const navigate = useNavigate();
  function newDivorceHandler(event) {
    event.preventDefault();
    navigate('/lawyer/new-divorce');
    console.log('New divorce button clicked');
  }

  // function AllDivorcesHandler(event) {
  //   event.preventDefault();
  //   console.log('All divorces button clicked');
  // }

  function searchDivorceHandler(event) {
    event.preventDefault();
    console.log('Search divorce button clicked');
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
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
        </div>
      </section>
      <section className={classes.acceptedDivorces}>
        <h1 className={classes.satustTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
        </div>
      </section>
      <section className={classes.rejectedDivorces}>
        <h1 className={classes.satustTitle}>Closed</h1>
        <div className={classes.divorceList}>
          <DivorceItem />
          <DivorceItem />
        </div>
      </section>
    </div>
  );
}

export default LawyerWorkspace;
