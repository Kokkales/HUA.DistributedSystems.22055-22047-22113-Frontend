// import classes from './FullDivorceA.module.css';
import classes from '../lawyers/EditDivorce.module.css';
import Overlay from '../../ui/Overlay';
import Card from '../../ui/Card';
import DivorceLayout from '../../layout/DivorceLayout';
import PrimaryButton from '../../ui/PrimaryButton';
import ReminderButton from '../../ui/ReminderButton';
import { useState, useEffect } from 'react';
// import EditDivorce from '../users/lawyers/EditDivorce';
// import EditDivorce from './EditDivorce';
import FullDivorceOptions from '../../divorces/FullDivorceOptions';
import ActionPopUp from '../notaries/ActionPopUp';
import TextField from '../../ui/TextField';
// import classes from './WatchDivorce.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditDivorce(props) {
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
  const [editData, setEditData] = useState({
    id: null,
    status: 'PENDING',
    contractDetails: '',
    lawyerLeadTaxNumber: '',
    lawyerTwoTaxNumber: '',
    spouseOneTaxNumber: '',
    spouseTwoTaxNumber: '',
    notaryTaxNumber: '',
  });
  // const isShown = props.isEditShown;
  console.log('Type: ' + props.type);
  console.log('Role' + props.role);
  console.log('Divorce id: ' + props.divorceId);

  // request all the information of the certain divorce
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
          'http://localhost:8887/divorce/findById?id=' + props.divorceId,
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
  // function openEditForm() {
  //   setEditIsWatch(true);
  // }

  function openPopUpForm() {
    setIsPopUpDivorce(false);
  }

  // EXIT BUTTON
  function exitHandler(event) {
    console.log('exit button clicked from edir');
    event.preventDefault();
    //POST changes
    // if (isShown) {
    //   console.log('closed the divorce');
    // }'
    props.formEditState(false);
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
  //SAVE EDIT BUTTON
  //   {
  // "id": 79,
  //   "status": "PENDING",
  // "contractDetails": "Contrakqweqweqwejnct Details",
  // "lawyerLeadTaxNumber": "1",
  // "lawyerTwoTaxNumber": "2",
  // "spouseOneTaxNumber": "18",
  // "spouseTwoTaxNumber": "14",
  // "notaryTaxNumber": "30"
  // }
  function setValuesToObject() {
    setEditData({
      id: divorceData.id,
      status: divorceData.status,
      contractDetails: divorceData.contractDetails,
      date: divorceData.date,
      givenStatements: divorceData.statements,
    });
  }
  async function saveHandler(event) {
    console.log('save button clicked');
    //send divorce_id
    event.preventDefault();
    console.log('create new divorce button clicked');
    console.log('Divorce Data that were edited: ' + JSON.stringify(editData));
    try {
      const response = await axios.post(
        'http://localhost:8887/divorce/edit',
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Correct header name
          },
          withCredentials: true, // Correct usage: Boolean value
        }
      );
      const data = response.data;
    } catch (error) {
      if (error.message == 'Request failed with status code 500') {
        console.log('User not found invotation to send');
        console.log('Edit failed');
        // setIsFound(false);
      }
      // console.log('Find User with Tax error: ', error);
    }

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

  function setSpouseOneInput(event) {
    setSpouseOneInput(event.target.value);
  }
  function setSpouseTwoInput(event) {
    setSpouseTwoInput(event.target.value);
  }

  function setSpouseOneLawyerInput(event) {
    setSpouseOneLawyerInput(event.target.value);
  }
  function setSpouseTwoLawyerInput(event) {
    setSpouseTwoLawyerInput(event.target.value);
  }

  function setNotaryInput(event) {
    setNotaryInput(event.target.value);
  }

  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  }
  return (
    <Overlay>
      <div className={classes.editDivorceForm}>
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
                  <input
                    type="text"
                    value={divorceData.contractDetails}
                    onChange={(e) =>
                      setDivorceData({
                        ...divorceData,
                        contractDetails: e.target.value,
                      })
                    }
                  />
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
                    <p> {notaryStatementData.fullName}</p>
                    <div className={classes.roleStatus}>
                      {notaryStatementData.choice}
                    </div>
                  </div>
                </div>
                <div className={classes.statusInfo}>
                  <div>
                    <h3>Notorial Deed Number:</h3>
                    <p>{notaryStatementData.comment}</p>
                  </div>
                </div>
              </section>
              <section className={classes.options}>
                <FullDivorceOptions
                  edit={false}
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
                  saveEditHandler={props.saveEditHandler}
                />
              </section>
            </div>
          </DivorceLayout>
        </Card>
        {/* {editIsWatch && (
        <EditDivorce
          divorceId={props.divorceId}
          role={props.role}
          type={props.type}
          data={divorceData}
          formState={openEditForm}
        />
      )} */}
        {isPopUpDivorce && (
          <ActionPopUp
            formState={openPopUpForm}
            divorceId={props.divorceId}
            role={props.role}
            actionType={actionType}
          />
        )}
      </div>
    </Overlay>
  );
}

export default EditDivorce;
