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
        <h1>RESULTS</h1>
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
        <PrimaryButton name="Exit" />
      </div>
    </Overlay>
  );
}

export default SearchResults;
