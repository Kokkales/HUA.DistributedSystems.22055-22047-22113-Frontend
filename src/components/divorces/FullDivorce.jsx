import classes from './FullDivorce.module.css';

function FullDivorce(props) {
  return (
    <div className={classes.completeDivorce}>
      <section className={classes.mainCharacters}>
        <div className={classes.divorceNames}>
          <div className={classes.spouseOne}>
            <h1>{props.data.spouseOne} vs </h1>
          </div>
          <div className={classes.spouseTwo}>
            <h1>{props.data.spouseTwo}</h1>
          </div>
        </div>
        <div className={classes.exitX}>
          <div onClick={props.exitHandler}>X</div>
        </div>
      </section>
      <section className={classes.involvedParties}>
        <h2>Parties</h2>
        <div>
          <h3 className={classes.label}>Lawyer1:</h3>
          <div className={classes.info}> {props.data.lawyerLeadName}</div>
        </div>
        <div>
          <div className={classes.label}>Lawyer2:</div>
          <div className={classes.info}> {props.data.lawyerSecName}</div>
        </div>
        <div>
          <div className={classes.label}>Notary:</div>
          <div className={classes.info}> {props.data.notaryName}</div>
        </div>
      </section>
      <section className={classes.contractDetails}>
        <h2>Details</h2>
        <div>
          <div className={classes.label}>Application Date:</div>
          <div className={classes.info}>{props.data.date}</div>
        </div>
        <div>
          <div className={classes.label}>Contract Details:</div>
          <div className={classes.info}>{props.data.contractDetails}</div>
        </div>
      </section>
      <section className={classes.status}>
        <h2>Result</h2>
        <div>
          <div className={classes.info}>{props.data.status}</div>
        </div>
      </section>
    </div>
  );
}

export default FullDivorce;
