import DivorceItem from '../../divorces/DivorceItem';
import PrimaryButton from '../../ui/PrimaryButton';
import SearchBar from '../../ui/SearchBar';
import classes from './AdminWorkspace.module.css';
import { useNavigate } from 'react-router-dom';

function AdminWorkspace(props) {
  const navigate = useNavigate();

  function statisticsHandler(event) {
    //links the admin to statistics page
    event.preventDefault();
    navigate('/admin/workspace/statistics');
  }
  return (
    <div className={classes.spouseWorkspace}>
      <section className={classes.options}>
        <div>
          <PrimaryButton name="Show Statistics" onClick={statisticsHandler} />
        </div>
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

export default AdminWorkspace;
