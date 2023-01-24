// import classes from './DraftDivorceList.module.css';
import DivorceItem from './DivorceItem';

function DraftDivorceList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((meetup) => (
        <DivorceItem
        // key={meetup.id}
        // id={meetup.id}
        // image={meetup.image}
        // title={meetup.title}
        // address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default DraftDivorceList;
