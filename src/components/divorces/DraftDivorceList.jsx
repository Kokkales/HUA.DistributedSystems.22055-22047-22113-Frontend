// import classes from './DraftDivorceList.module.css';
import DivorceItem from './DivorceItem';
import DivorceListLayout from './DivorceListLayout';

function DraftDivorceList(props) {
  return (
    <DivorceListLayout>
      {props.items.map((divorce) => (
        //give the role and type attribute from here
        <DivorceItem
          key={divorce.id}
          id={divorce.id}
          status={divorce.status}
          spouseOne={divorce.spouseOneName}
          spouseTwo={divorce.spouseTwoName}
          role={props.role}
          type={props.type}
          // image={meetup.image}
          onClick={props.onClick}
        />
      ))}
    </DivorceListLayout>
  );
}

export default DraftDivorceList;
