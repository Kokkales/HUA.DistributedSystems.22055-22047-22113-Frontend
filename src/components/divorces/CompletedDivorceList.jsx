// import classes from './CompletedDivorceList.module.css';
import DivorceItem from './DivorceItem';

function CompletedDivorceList(props) {
  return (
    <ul>
      {props.items.map((divorce) => (
        <DivorceItem
          id={divorce.id}
          status={divorce.status}
          spouseOne={divorce.spouseOneName}
          spouseTwo={divorce.spouseTwoName}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
}

export default CompletedDivorceList;
