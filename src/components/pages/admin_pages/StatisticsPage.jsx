import Layout from '../../layout/Layout';
import Statistics from '../../statistics/Statistics';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StatisticsPage(props) {
  const token = localStorage.getItem('jwtToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      //code
    } else {
      navigate('/');
    }
  }, []);
  return (
    <Layout>
      <Statistics role="admin" />
    </Layout>
  );
}

export default StatisticsPage;
