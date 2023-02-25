// import classes from './CompletedDivorceList.module.css';
import DivorceItem from './DivorceItem';
import DivorceListLayout from './DivorceListLayout';

function CompletedDivorceList(props) {
  return (
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
  );
}

export default CompletedDivorceList;
