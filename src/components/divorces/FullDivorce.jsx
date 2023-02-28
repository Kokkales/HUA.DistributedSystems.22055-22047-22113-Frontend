import classes from './FullDivorce.module.css';
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
  const [isPopUpDivorce, setIsPopUpDivorce] = useState(false);
  const [actionType, setActionType] = useState();
  const [statements, setStatements] = useState([{}]);
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
    fetch('http://localhost:8887/divorce/findById?id=' + props.divorceId)
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
        console.log('Spouse One Check : ' + divorceData);
        // meetups.push(meetup);
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
            <section className={classes.seperators}>
              <div className={classes.seperateOne}>
                <h1>{spouseOneStatementData.fullName}</h1>
              </div>
              <div className={classes.seperateTwo}>
                <h1>{spouseTwoStatementData.fullName}</h1>
              </div>
              <div className={classes.exitX}>{/* SVG */}</div>
            </section>
            <section className={classes.allInfo}>
              <div className={classes.involvedParties}>
                <div className={classes.user}>
                  <div className={classes.fullName}>
                    <h3>{spouseOneStatementData.fullName}</h3>
                    <div className={classes.faculty}>
                      <h2>Spouse One</h2>
                    </div>
                  </div>
                  <div className={classes.statement}>
                    <p>{spouseOneStatementData.choice}</p>
                  </div>
                  <div className={classes.comment}>
                    <h3 className={classes.commentTitle}>Comment:</h3>
                    <div className={classes.commentInfo}>
                      {spouseOneStatementData.comment}
                    </div>
                  </div>
                </div>
                <div className={classes.user}>
                  <div className={classes.fullName}>
                    <h3>{spouseTwoStatementData.fullName}</h3>
                    <div className={classes.faculty}>
                      <h2>Spouse Two</h2>
                    </div>
                  </div>
                  <div className={classes.statement}>
                    <p>{spouseTwoStatementData.choice}</p>
                  </div>
                  <div className={classes.comment}>
                    <h3 className={classes.commentTitle}>Comment:</h3>
                    <div className={classes.commentInfo}>
                      {spouseOneStatementData.comment}
                    </div>
                  </div>
                </div>
                <div className={classes.user}>
                  <div className={classes.fullName}>
                    <h3>{spouseOneStatementData.fullName}</h3>
                    <div className={classes.faculty}>
                      <h2>Lead lawyer</h2>
                    </div>
                  </div>
                  <div className={classes.statement}>
                    <p>{spouseOneStatementData.choice}</p>
                  </div>
                  <div className={classes.comment}>
                    <h3 className={classes.commentTitle}>Comment:</h3>
                    <div className={classes.commentInfo}>
                      {spouseOneStatementData.comment}
                    </div>
                  </div>
                </div>
                <div className={classes.user}>
                  <div className={classes.fullName}>
                    <h3>{spouseOneStatementData.fullName}</h3>
                    <div className={classes.faculty}>
                      <h2>Second Lwayer</h2>
                    </div>
                  </div>
                  <div className={classes.statement}>
                    <p>{lawyerTwoStatementData.choice}</p>
                  </div>
                  <div className={classes.comment}>
                    <h3 className={classes.commentTitle}>Comment:</h3>
                    <div className={classes.commentInfo}>
                      {lawyerTwoStatementData.comment}
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.moreInfo}>
                <div className={classes.dateInfo}>
                  <h3 className={classes.dateTitle}>Date</h3>
                  <div className={classes.date}>{divorceData.date}</div>
                </div>
                <div className={classes.details}>
                  <h2 className={classes.contractTitle}>Contract Details</h2>
                  <div className={classes.contractDetails}>
                    {divorceData.contractDetails}
                  </div>
                </div>
              </div>
              <div className={classes.statusInfo}>
                <h2>Result</h2>
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
                  <div>
                    <h3>Notorial Deed Number:{notaryStatementData.comment}</h3>
                  </div>
                </div>
              </div>
            </section>
            <section className={classes.options}>
              <FullDivorceOptions
                type={props.type}
                role={props.role}
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
// {
//     "id": 10,
//     "status": "Pending",
//     "spouseOneName": "Kip Ettels",
//     "spouseTwoName": "Merwyn Jemmett",
//     "contractDetails": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui",
//     "date": "2021-08-13T15:53:19.000+00:00",
//     "lawyerLeadName": "Kenyon De Gogay",
//     "notarialDeedNumber": null,
//     "statements": [
//         {
//             "fullName": "Kip Ettels",
//             "faculty": "SPOUSE_ONE",
//             "choice": "ACCEPTED",
//             "timestamp": "2021-08-13T15:53:19.000+00:00",
//             "comment": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer"
//         },
//         {
//             "fullName": "Merwyn Jemmett",
//             "faculty": "SPOUSE_TWO",
//             "choice": "ACCEPTED",
//             "timestamp": "2021-08-13T15:53:19.000+00:00",
//             "comment": "dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer"
//         },
//         {
//             "fullName": "Nicole Avieson",
//             "faculty": "LAWYER_TWO",
//             "choice": "OBJECTED",
//             "timestamp": "2021-08-13T15:53:19.000+00:00",
//             "comment": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in"
//         },
//         {
//             "fullName": "Barde Cancellor",
//             "faculty": "NOTARY",
//             "choice": "PENDING",
//             "timestamp": "2021-08-13T15:53:19.000+00:00",
//             "comment": "JO77075"
//         }
//     ]
// }
