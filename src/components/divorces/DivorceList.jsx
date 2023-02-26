// import classes from './PendingDivorceList.module.css';
import DivorceItem from './DivorceItem';
import DivorceListLayout from './DivorceListLayout';

function DivorceList(props) {
  return (
    <DivorceListLayout>
      {props.items.map((divorce) => (
        <DivorceItem
          key={divorce.id}
          id={divorce.id}
          status={divorce.status}
          spouseOne={divorce.spouseOneName}
          spouseTwo={divorce.spouseTwoName}
          // image={meetup.image}
          onClick={props.onClick}
          role={props.role}
          type={props.type}
        />
      ))}
    </DivorceListLayout>
  );
}

export default DivorceList;
