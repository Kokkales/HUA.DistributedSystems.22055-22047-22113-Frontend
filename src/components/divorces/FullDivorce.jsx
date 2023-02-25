import classes from './FullDivorce.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
import { useState, useEffect } from 'react';
import EditDivorce from '../users/lawyers/EditDivorce';
import FullDivorceOptions from './FullDivorceOptions';
// import classes from './WatchDivorce.module.css';

function FullDivorce(props) {
  const [editIsWatch, setEditIsWatch] = useState(false);
  const [fullDivorce, setFullDivorce] = useState({});
  const [divorceData, setDivorceData] = useState();
  const isShown = props.isShown;
  console.log('Type: ' + props.type);
  console.log('Role' + props.role);
  console.log('Divorce id: ' + props.divorceId);

  // request all the information of the certain divorce
  useEffect(() => {
    fetch('http://localhost:8887/divorce/findById?id=' + `${props.divorceId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Returned Data : ' + JSON.stringify(data.status));
        const divorce = {
          id: data.id,
          status: data.status,
          spouseOne: data.spouseOneName,
          spouseTwo: data.spouseTwoName,
          contractDetails: data.contractDetails,
          date: data.date,
          lawyerLeadName: data.lawyerLeadName,
          lawyerSecName: data.lawyerName,
          notaryName: data.notaryName,
        };
        setDivorceData(divorce);
        console.log('Spouse One Check : ' + divorceData);
        // meetups.push(meetup);
      });
  }, []);

  function openEditForm() {
    setEditIsWatch(false);
  }

  // EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(isShown);
  }
  // EDIT BUTTON
  function editHandler(event) {
    console.log('edit button clicked');
    setEditIsWatch(true);
    event.preventDefault();
  }
  //DELETE BUTTON
  function deleteHandler(event) {
    console.log('delete button clicked');
    //send divorce_id
    event.preventDefault();
  }
  //REMINDER BUTTON
  function reminderHandler(event) {
    console.log('reminder button clicked');
    event.preventDefault();
  }
  //ACCEPT BUTTON
  function acceptHandler(event) {
    console.log('acception button clicked');
    event.preventDefault();
  }
  //REJECT BUTTON
  function rejectHandler(event) {
    console.log('rjection button clicked');
    event.preventDefault();
  }
  //OBJECT BUTTON
  function objectHandler(event) {
    console.log('objection button clicked');
    event.preventDefault();
  }
  function acceptNotaryHandler(event) {
    console.log('notary acception button clicked');
    event.preventDefault();
  }

  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.completeDivorce}>
            {/* <section className={classes.mainCharacters}>
              }{' '}
              <div className={classes.divorceNames}>
                <div className={classes.spouseOne}>
                  <h1>{divorceData.spouseOne} vs</h1>
                </div>
                <div className={classes.spouseTwo}>
                  <h1>{divorceData.spouseTwo}</h1>
                </div>
              </div>
              <div className={classes.exitX}>
                <svg
                  width="50"
                  height="50"
                  onClick={exitHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </section>
            <section className={classes.involvedParties}>
              <h2>Parties</h2>
              <div className={classes.ones}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse1:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {divorceData.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer1:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {divorceData.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
              </div>
              <div className={classes.twos}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse2:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {divorceData.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer2:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {divorceData.spouseOneStatus}ok
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> blah blah </p>
                  </div>
                </div>
              </div>
            </section>
            <section className={classes.contractDetails}>
              <h2>Details</h2>
              <div>
                <h3 className={classes.label}>Application Date:</h3>
                <div className={classes.info}>{divorceData.date}</div>
              </div>
              <div>
                <h3 className={classes.label}>Contract Details:</h3>
                <h3 className={classes.info}>{divorceData.contractDetails}</h3>
              </div>
            </section>
            <section className={classes.status}>
              <h2>Result</h2>
              <div>
                <h3>Status</h3>
                <div className={classes.info}>{divorceData.status}</div>
              </div>
              <div className={classes.externals}>
                <div className={classes.notaryInfo}>
                  <h3 className={classes.label}>Notary:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>
                    {divorceData.spouseOneStatus}ok
                  </div>
                </div>
                <div>
                  <h3>Notorial Deed Number:</h3>
                </div>
              </div>
            </section>*/}
            <section className={classes.options}>
              <FullDivorceOptions
                type={props.type}
                role={props.role}
                exitHandler={exitHandler}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                reminderHandler={reminderHandler}
              />
            </section>
          </div>
        </DivorceLayout>
      </Card>
      {editIsWatch && (
        <EditDivorce
          role={props.role}
          type={props.type}
          data={divorceData}
          formState={openEditForm}
        />
      )}
    </Overlay>
  );
}

export default FullDivorce;
