import DivorceItem from '../../divorces/DivorceItem';
import DivorceList from '../../divorces/DivorceList';
import classes from './ResponseDivorce.module.css';

function ResponseDivorce(props) {
  return (
    <div className={classes.responseContext}>
      <div className={classes.responseBlock}>
        <h1 className={classes.statusTitle}>Divorce Requests</h1>
        <div className={classes.divorceList}>
          {/* <DivorceList
          // items={loadedDraft}
          type="draft"
          role={props.role}
          id="1"
        /> */}
          <DivorceItem type="draft" role={props.role} page="responsePage" />
        </div>
      </div>
    </div>
  );
}

export default ResponseDivorce;
