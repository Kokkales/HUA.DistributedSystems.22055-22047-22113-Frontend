// import classes from './FullDivorceA.module.css';
import classes from './test.module.css';
import Overlay from '../ui/Overlay';
import Card from '../ui/Card';
import DivorceLayout from '../layout/DivorceLayout';
import PrimaryButton from '../ui/PrimaryButton';
import ReminderButton from '../ui/ReminderButton';
import { useState, useEffect } from 'react';
import EditDivorce from '../users/lawyers/EditDivorce';
// import EditDivorce from './EditDivorce';
import FullDivorceOptions from './FullDivorceOptions';
import ActionPopUp from '../users/notaries/ActionPopUp';
import axios from 'axios';
// import classes from './WatchDivorce.module.css';
import { useNavigate } from 'react-router-dom';
function FullDivorce(props) {
  const [editIsWatch, setEditIsWatch] = useState(false);
  const [fullDivorce, setFullDivorce] = useState({});
  const [divorceData, setDivorceData] = useState({});
  const [statements, setStatements] = useState([{}]);
  const [isPopUpDivorce, setIsPopUpDivorce] = useState(false);
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [actionType, setActionType] = useState();
  // const [statements, setStatements] = useState([{}]);
  const [spouseOneStatementData, setSpouseOneStatementData] = useState({});
  const [spouseTwoStatementData, setSpouseTwoStatementData] = useState({});
  const [lawyerTwoStatementData, setLawyerTwoStatementData] = useState({});
  const [notaryStatementData, setNotaryStatementData] = useState({});
  const isShown = props.isShown;
  const navigate = useNavigate();

  const token = localStorage.getItem('jwtToken');

  useEffect(() => {
    // console.log('Type: ' + props.type);
    // console.log('Role' + props.role);
    // console.log('Divorce id: ' + props.divorceId);
    // 'http://localhost:8887/divorce/findById?id='+props.divorceId
    if (token) {
      //code
    } else {
      navigate('/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/findById?id=' +
            encodeURIComponent(props.divorceId),
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Correct header name
            },
            withCredentials: true, // Correct usage: Boolean value
          }
        );
        const data = response.data;
        // console.log(data);
        // console.log('Returned Data : ' + JSON.stringify(data.status));
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
          // console.log('FAculty: ' + user.faculty);
          // console.log('ok');
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
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);

  function openEditForm() {
    setEditIsWatch(false);
  }

  function openPopUpForm() {
    setIsPopUpDivorce(false);
  }
  function popUpHandler(event) {
    event.preventDefault();
    //link to edit profile form
    // setIsActionPopUp(true);
    console.log('Edit button clicked');
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
    // props.formEditState(false);
  }
  // EDIT BUTTON
  function editHandler(event) {
    console.log('edit button clicked');
    // props.divorceFullData = divorceData;
    // setEditIsWatch(true);
    // setFullDivorce(false);
    props.formState(false);
    props.formEditState(true);
    event.preventDefault();
  }

  //EDIT PENDING BUTTON
  function editPendingHandler(event) {
    event.preventDefault();

    //TODO
  }

  {
    /*{
    "divorceID": 9,
      "role": "SPOUSE",
        "comment": "blah blah",
          "choice": "ACCEPTED"
  }*/
  }

  //TODO
  //CREATE HANDLER
  async function saveHandler(event) {
    event.preventDefault();
    console.log('create new divorce button clicked');
    // console.log('Divorce Data: ' + JSON.stringify(createDivorceData));
    // try {
    //   const response = await axios.post(
    //     'http://localhost:8887/divorce/save',
    //     createDivorceData,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         'Content-Type': 'application/json', // Correct header name
    //       },
    //       withCredentials: true, // Correct usage: Boolean value
    //     }
    //   );
    //   const data = response.data;
    // } catch (error) {
    //   if (error.message == 'Request failed with status code 500') {
    //     console.log('User not found invotation to send');
    //     // setIsFound(false);
    //   }
    //   // console.log('Find User with Tax error: ', error);
    // }
  }

  //REMINDER BUTTON
  function reminderHandler(event) {
    console.log('reminder button clicked');
    event.preventDefault();
  }
  const [addStatement, setAddStatement] = useState({
    divorceID: props.divorceId,
    role: '',
    comment: '',
    choice: 'ACCEPTED',
  });
  //ACCEPT BUTTON
  function acceptDivorceHandler(event) {
    console.log('acception button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    // setIsPopUpShown(true);
    setActionType('accept');
    // props.formState(false);
    setAddStatement({
      divorceID: props.divorceId,
      role: props.role.toUpperCase(),
      comment: '',
      choice: 'ACCEPTED',
    });
  }

  //REJECT BUTTON
  function rejectDivorceHandler(event) {
    console.log('rjection button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    setActionType('reject');
    setAddStatement({
      divorceID: props.divorceId,
      role: props.role.toUpperCase(),
      comment: '',
      choice: 'REJECTED',
    });
  }
  //OBJECT BUTTON
  function objectDivorceHandler(event) {
    console.log('objection button clicked');
    event.preventDefault();
    setIsPopUpDivorce(true);
    setActionType('object');
    // props.formEditState(true);
    setAddStatement({
      divorceID: props.divorceId,
      role: props.role.toUpperCase(),
      comment: '',
      choice: 'OBJECTED',
    });
  }
  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }

  // const plainText = stripHtml(htmlText);

  return (
    <div>
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
                      <p> {stripHtml(spouseTwoStatementData.comment)} </p>
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
                      <p> {stripHtml(lawyerTwoStatementData.comment)} </p>
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
                  <h3 className={classes.info}>
                    {stripHtml(divorceData.contractDetails)}
                  </h3>
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
                    <h3>
                      Notorial Deed Number:
                      {stripHtml(notaryStatementData.comment)}
                    </h3>
                  </div>
                </div>
              </section>
              <section className={classes.options}>
                <FullDivorceOptions
                  edit={true}
                  type={props.type}
                  role={props.role}
                  page={props.page}
                  exitHandler={exitHandler}
                  editHandler={editHandler}
                  saveHandler={saveHandler}
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
      </Overlay>
      {isPopUpDivorce && (
        <ActionPopUp
          formState={openPopUpForm}
          // isPopUpShown={isPopUpShown}
          divorceId={props.divorceId}
          role={props.role}
          actionType={actionType}
          data={addStatement}
        />
      )}
    </div>
  );
}

export default FullDivorce;
