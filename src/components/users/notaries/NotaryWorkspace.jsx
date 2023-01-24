import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './NotaryWorkspace.module.css';

function NotaryWorkspace(props) {
  return (
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <SearchBar type="text" placeholder="Search Divorce" />
        <PrimaryButton name="Search" />
      </section>
      <section className={classes.pendingDivorces}>
        <h1 className={classes.statusTitle}>Pending</h1>
        <div className={classes.divorceList}>
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
        </div>
      </section>
      <section className={classes.closedDivorces}>
        <h1 className={classes.statusTitle}>Completed</h1>
        <div className={classes.divorceList}>
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
          <DivorceItem />
        </div>
      </section>
    </div>
  );
}

export default NotaryWorkspace;
