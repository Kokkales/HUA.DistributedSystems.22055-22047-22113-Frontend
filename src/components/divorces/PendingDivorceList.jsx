// import classes from './PendingDivorceList.module.css';
import DivorceItem from './DivorceItem';

function PendingDivorceList(props) {
  return (
    <ul>
      {props.items.map((divorce) => (
        <DivorceItem
          key={divorce.id}
          id={divorce.id}
          status={divorce.status}
          spouseOne={divorce.spouseOneName}
          spouseTwo={divorce.spouseTwoName}
          // image={meetup.image}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
}

export default PendingDivorceList;
