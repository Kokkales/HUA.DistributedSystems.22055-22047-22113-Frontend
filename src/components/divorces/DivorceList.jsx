// import classes from './PendingDivorceList.module.css';
import DivorceItem from './DivorceItem';
import DivorceListLayout from './DivorceListLayout';

function DivorceList(props) {
  console.log('FROM DIVORCE LIST:');
  console.log('Type: ' + props.type);
  console.log('Role: ' + props.role);
  console.log('Page: ' + props.page);
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
          page={props.page}
        />
      ))}
    </DivorceListLayout>
  );
}

export default DivorceList;
