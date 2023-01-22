import DivorceItem from '../divorces/DivorceItem';
import PrimaryButton from '../ui/PrimaryButton';
import SearchBar from '../ui/SearchBar';
import TextField from '../ui/TextField';
import classes from './LawyerWorkspace.module.css';

function LawyerWorkspace(props) {
  return (
    <div className={classes.workspace}>
      <section className={classes.newDivorces}>
        <PrimaryButton name="New Divorce" />
      </section>
      <section className={classes.findDivorces}>
        <div className={classes.searchAllBox}>
          <PrimaryButton name="See All Divorce" />
        </div>
        <div className={classes.searchBox}>
          <SearchBar>
            <input
              className={classes.searchBarTextbox}
              type="text"
              placeholder="Search Divorce"
            ></input>
          </SearchBar>
          <PrimaryButton name="Search" />
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
