// import classes from './FullDivorceA.module.css';
import classes from './test.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
import { useState, useEffect } from 'react';
import EditDivorce from '../users/lawyers/EditDivorce';
import FullDivorceOptions from './FullDivorceOptions';
import ActionPopUp from '../users/notaries/ActionPopUp';
// import classes from './WatchDivorce.module.css';

function FullDivorce(props) {
  const [editIsWatch, setEditIsWatch] = useState(false);
  const [fullDivorce, setFullDivorce] = useState({});
  const [divorceData, setDivorceData] = useState({});
  const [statements, setStatements] = useState([{}]);
  const [isPopUpDivorce, setIsPopUpDivorce] = useState(false);
  const [actionType, setActionType] = useState();
  // const [statements, setStatements] = useState([{}]);
  const [spouseOneStatementData, setSpouseOneStatementData] = useState({});
  const [spouseTwoStatementData, setSpouseTwoStatementData] = useState({});
  const [lawyerTwoStatementData, setLawyerTwoStatementData] = useState({});
  const [notaryStatementData, setNotaryStatementData] = useState({});
  const isShown = props.isShown;
  console.log('Type: ' + props.type);
  console.log('Role' + props.role);
  console.log('Divorce id: ' + props.divorceId);

  // request all the information of the certain divorce
  useEffect(() => {
    fetch(
      'http://localhost:8887/divorce/findById?id=' +
        props.divorceId +
        '&taxNumber=1'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Returned Data : ' + JSON.stringify(data.status));
        const divorce = {
          id: data.id,
          status: data.status,
          contractDetails: data.contractDetails,
          date: data.date,
          givenStatements: data.statements,
        };
        for (const key in divorce.givenStatements) {
          const user = {
            key: key,
            fullName: divorce.givenStatements[key].fullName,
            faculty: divorce.givenStatements[key].faculty,
            choice: divorce.givenStatements[key].choice,
            timestamp: divorce.givenStatements[key].timestamp,
            comment: divorce.givenStatements[key].comment,
          };
          console.log('FAculty: ' + user.faculty);
          console.log('ok');
          if (user.faculty == 'LAWYER_TWO') {
            setLawyerTwoStatementData(user);
          }
          if (user.faculty === 'SPOUSE_ONE') {
            setSpouseOneStatementData(user);
          }
          if (user.faculty == 'SPOUSE_TWO') {
            setSpouseTwoStatementData(user);
          }
          if (user.faculty == 'NOTARY') {
            setNotaryStatementData(user);
          }
        }
        setDivorceData(divorce);
      });
  }, []);

  function openEditForm() {
    setEditIsWatch(false);
  }

  function openPopUpForm() {
    setIsPopUpDivorce(false);
  }

  // EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked');
    event.preventDefault();
    //POST changes
    if (isShown) {
      console.log('closed the divorce');
    }
    props.formState(false);
  }
  // EDIT BUTTON
  function editHandler(event) {
    console.log('edit button clicked');
    setEditIsWatch(true);
    event.preventDefault();
  }

  //EDIT PENDING BUTTON
  function editPendingHandler(event) {
    event.preventDefault();
    //TODO
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
  function acceptDivorceHandler(event) {
    console.log('acception button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    setActionType('accept');
  }

  //REJECT BUTTON
  function rejectDivorceHandler(event) {
    console.log('rjection button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    setActionType('reject');
  }
  //OBJECT BUTTON
  function objectDivorceHandler(event) {
    console.log('objection button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    setActionType('object');
  }

  return (
    <Overlay>
      <Card>
        <DivorceLayout>
          <div className={classes.completeDivorce}>
            <section className={classes.mainCharacters}>
              <div className={classes.spouseTwo}>
                <h1>{spouseOneStatementData.fullName}</h1>
              </div>
              <div className={classes.seperator}>
                <h1>VS </h1>
              </div>
              <div className={classes.spouseOne}>
                <h1>{spouseTwoStatementData.fullName}</h1>
              </div>
            </section>
            <section className={classes.involvedParties}>
              <div className={classes.category}>
                <h2>Parties</h2>
              </div>
              <div className={classes.ones}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse1:</h3>
                  <p className={classes.involvedName}>
                    {spouseOneStatementData.fullName}
                  </p>
                  <div className={classes.roleStatus}>
                    {spouseOneStatementData.choice}
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> {spouseOneStatementData.comment} </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer1:</h3>
                  <p className={classes.involvedName}>
                    {divorceData.lawyerLeadName}
                  </p>
                  <div className={classes.roleStatus}>ACCEPT</div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> No comment </p>
                  </div>
                </div>
              </div>
              <div className={classes.twos}>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Spouse2:</h3>
                  <p className={classes.involvedName}>
                    {spouseTwoStatementData.fullName}
                  </p>
                  <div className={classes.roleStatus}>
                    {spouseTwoStatementData.choice}
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> {spouseTwoStatementData.comment} </p>
                  </div>
                </div>
                <div className={classes.involvedInfo}>
                  <h3 className={classes.label}>Lawyer2:</h3>
                  <p className={classes.involvedName}>
                    {lawyerTwoStatementData.fullName}
                  </p>
                  <div className={classes.roleStatus}>
                    {lawyerTwoStatementData.choice}
                  </div>
                  <div className={classes.comment}>
                    <h4>Comment</h4>
                    <p> {lawyerTwoStatementData.comment} </p>
                  </div>
                </div>
              </div>
            </section>
            <section className={classes.contractDetails}>
              <div className={classes.category}>
                <h2>Details</h2>
              </div>
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
              <div className={classes.category}>
                <h2>Result</h2>
              </div>
              <div>
                <h3>Status</h3>
                <div className={classes.info}>{divorceData.status}</div>
              </div>
              <div className={classes.externals}>
                <div className={classes.notaryInfo}>
                  <h3 className={classes.label}>Notary:</h3>
                  <p className={classes.involvedName}>
                    {notaryStatementData.fullName}
                  </p>
                  <div className={classes.roleStatus}>
                    {notaryStatementData.choice}
                  </div>
                </div>
              </div>
              <div className={classes.statusInfo}>
                <div>
                  <h3>Notorial Deed Number:{notaryStatementData.comment}</h3>
                </div>
              </div>
            </section>
            <section className={classes.options}>
              <FullDivorceOptions
                type={props.type}
                role={props.role}
                page={props.page}
                exitHandler={exitHandler}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                reminderHandler={reminderHandler}
                editPendingHandler={editPendingHandler}
                acceptDivorceHandler={acceptDivorceHandler}
                rejectDivorceHandler={rejectDivorceHandler}
                objectDivorceHandler={objectDivorceHandler}
              />
            </section>
          </div>
        </DivorceLayout>
      </Card>
      {editIsWatch && (
        <EditDivorce
          divorceId={props.divorceId}
          role={props.role}
          type={props.type}
          data={divorceData}
          formState={openEditForm}
        />
      )}
      {isPopUpDivorce && (
        <ActionPopUp
          formState={openPopUpForm}
          divorceId={props.divorceId}
          role={props.role}
          actionType={actionType}
        />
      )}
    </Overlay>
  );
}

export default FullDivorce;

// <Overlay>
//       <Card>
//         <DivorceLayout>
//           <div className={classes.completeDivorce}>
//             <section className={classes.mainCharacters}>
//               <div className={classes.divorceNames}>
//                 <div className={classes.spouseOne}>
//                   <h1>{spouseOneStatementData.fullName} vs</h1>
//                 </div>
//                 <div className={classes.spouseTwo}>
//                   <h1>{spouseTwoStatementData.fullName}</h1>
//                 </div>
//               </div>
//               <div className={classes.exitX}>
//                 <svg
//                   width="50"
//                   height="50"
//                   onClick={exitHandler}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//             </section>
//             <section className={classes.involvedParties}>
//               <h2>Parties</h2>
//               <div className={classes.ones}>
//                 <div className={classes.involvedInfo}>
//                   <h3 className={classes.label}>Spouse1:</h3>
//                   <p className={classes.involvedName}>
//                     {spouseOneStatementData.fullName}
//                   </p>
//                   <div className={classes.roleStatus}>
//                     {spouseOneStatementData.choice}
//                   </div>
//                   <div className={classes.comment}>
//                     <h4>Comment</h4>
//                     <p> {spouseOneStatementData.comment}</p>
//                   </div>
//                 </div>
//                 <div className={classes.involvedInfo}>
//                   <h3 className={classes.label}>Lawyer1:</h3>
//                   <p className={classes.involvedName}>
//                     {divorceData.lawyerLeadName}ok
//                   </p>
//                   <div className={classes.roleStatus}>{'ACCEPTED'}</div>
//                   <div className={classes.comment}>
//                     <h4>Comment</h4>
//                     <p className={classes.content}>
//                       {' '}
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Ad omnis officia sed temporibus, ex quis error aperiam
//                       fugit fuga. Dolorem numquam placeat sed blanditiis
//                       accusantium? Iure sequi officiis blanditiis nesciunt.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className={classes.twos}>
//                 <div className={classes.involvedInfo}>
//                   <h3 className={classes.label}>Spouse2:</h3>
//                   <p className={classes.involvedName}>
//                     {spouseTwoStatementData.fullName}
//                   </p>
//                   <div className={classes.roleStatus}>
//                     {/* {divorceData.spouseOneStatus} */}
//                   </div>
//                   <div className={classes.comment}>
//                     <h4>Comment</h4>
//                     {/* <p> {spouseTwoStatementData.comment} </p> */}
//                   </div>
//                 </div>
//                 <div className={classes.involvedInfo}>
//                   <h3 className={classes.label}>Lawyer2:</h3>
//                   <p className={classes.involvedName}>
//                     {lawyerTwoStatementData.fullName}
//                   </p>
//                   <div className={classes.roleStatus}>
//                     {divorceData.spouseOneStatus}ok
//                   </div>
//                   <div className={classes.comment}>
//                     <h4>Comment</h4>
//                     <p className={classes.content}> blah blah </p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section className={classes.contractDetails}>
//               <h2>Details</h2>
//               <div>
//                 <h3 className={classes.label}>Application Date:</h3>
//                 <div className={classes.info}>{divorceData.date}</div>
//               </div>
//               <div>
//                 <h3 className={classes.label}>Contract Details:</h3>
//                 <h3 className={classes.info}>{divorceData.contractDetails}</h3>
//               </div>
//             </section>
//             <section className={classes.status}>
//               <h2>Result</h2>
//               <div>
//                 <h3>Status</h3>
//                 <div className={classes.info}>{divorceData.status}</div>
//               </div>
//               <div className={classes.externals}>
//                 <div className={classes.notaryInfo}>
//                   <h3 className={classes.label}>Notary:</h3>
//                   <p className={classes.involvedName}>
//                     {divorceData.lawyerLeadName}
//                   </p>
//                   <div className={classes.roleStatus}>
//                     {divorceData.spouseOneStatus}ok
//                   </div>
//                 </div>
//                 <div>
//                   <h3>Notorial Deed Number:</h3>
//                 </div>
//               </div>
//             </section>
//             <section className={classes.options}>
//               <FullDivorceOptions
//                 type={props.type}
//                 role={props.role}
//                 exitHandler={exitHandler}
//                 editHandler={editHandler}
//                 deleteHandler={deleteHandler}
//                 reminderHandler={reminderHandler}
//                 editPendingHandler={editPendingHandler}
//                 acceptDivorceHandler={acceptDivorceHandler}
//                 rejectDivorceHandler={rejectDivorceHandler}
//                 objectDivorceHandler={objectDivorceHandler}
//               />
//             </section>
//           </div>
//         </DivorceLayout>
//       </Card>
//       {editIsWatch && (
//         <EditDivorce
//           divorceId={props.divorceId}
//           role={props.role}
//           type={props.type}
//           data={divorceData}
//           formState={openEditForm}
//         />
//       )}
//       {isPopUpDivorce && (
//         <ActionPopUp
//           formState={openPopUpForm}
//           divorceId={props.divorceId}
//           role={props.role}
//           actionType={actionType}
//         />
//       )}
//     </Overlay>
