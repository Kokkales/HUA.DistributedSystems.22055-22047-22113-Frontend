// import classes from './DraftDivorceList.module.css';
import DivorceItem from './DivorceItem';

function DraftDivorceList(props) {
  return (
    <ul>
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
    </ul>
  );
}

export default DraftDivorceList;
