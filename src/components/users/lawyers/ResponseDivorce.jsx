import DivorceItem from '../../divorces/DivorceItem';
import DivorceList from '../../divorces/DivorceList';
import classes from './ResponseDivorce.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ResponseDivorce(props) {
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();
  const [loadedPending, setLoadedPending] = useState([]);

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
    async function fetchData() {
      try {
        const response = await axios.get(
          'http://localhost:8887/divorce/myDivorces?role=LAWYER',
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
        console.log('ok');
        console.log('What is this?', data);
        const pendings = [];
        for (const key in data) {
          const divorce = {
            key: key,
            ...data[key],
          };
          if (
            data[key].status === 'Pending' &&
            data[key].userLeadLawyer == false
          ) {
            //take only those where the variable of beonging to the lawyer is false
            pendings.push(divorce);
          }
          // meetups.push(meetup);
        }

        console.log('Pendings: ' + pendings);
        // setIsLoading(false);
        setLoadedPending(pendings);
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={classes.responseContext}>
      <div className={classes.responseBlock}>
        <h1 className={classes.statusTitle}>Divorce Requests</h1>
        <div className={classes.divorceList}>
          <DivorceList
            items={loadedPending}
            // type="toRespond"
            role="lawyer"
            page="responsePage"
          />
          {/* <DivorceItem type="draft" role="lawyer" page="responsePage" /> */}
        </div>
      </div>
    </div>
  );
}

export default ResponseDivorce;
