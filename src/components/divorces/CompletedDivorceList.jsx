// import classes from './CompletedDivorceList.module.css';
import DivorceItem from './DivorceItem';

function CompletedDivorceList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((meetup) => (
        <DivorceItem //add prop of completedOnClickDivorceHandler
        // key={meetup.id}
        // id={meetup.id}
        // image={meetup.image}
        // title={meetup.title}
        // address={meetup.address}
        // onClick={props.onClick (draftDivorceHandlerOnClickShow)}
        />
      ))}
    </ul>
  );
}

export default CompletedDivorceList;
