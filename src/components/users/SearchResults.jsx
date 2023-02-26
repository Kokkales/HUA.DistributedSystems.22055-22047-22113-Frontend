import Overlay from '../ui/Overlay';
import classes from './SearchResults.module.css';
import DivorceListLayout from '../divorces/DivorceListLayout';
import DivorceItem from '../divorces/DivorceItem';
import PrimaryButton from '../ui/PrimaryButton';

function SearchResults(props) {
  console.log('Talking from serch results comp: ' + props.items);
  return (
    <Overlay>
      <div className={classes.resultsSection}>
        <div className={classes.title}>
          <h1>RESULTS</h1>
        </div>
        <div className={classes.divorceList}>
          <DivorceListLayout>
            {props.items.map((divorce) => (
              <DivorceItem
                key={divorce.key}
                id={divorce.id}
                status={divorce.status}
                spouseOne={divorce.spouseOneName}
                spouseTwo={divorce.spouseTwoName}
                // onClick={props.onClick}
                role={props.role}
                type={props.type}
              />
            ))}
          </DivorceListLayout>
        </div>
        <div className={classes.exitX}>
          <PrimaryButton name="Exit" />
        </div>
      </div>
    </Overlay>
  );
}

export default SearchResults;
