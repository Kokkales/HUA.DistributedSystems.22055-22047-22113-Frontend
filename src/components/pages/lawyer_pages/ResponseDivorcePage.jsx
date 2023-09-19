import ResponseDivorce from '../../users/lawyers/ResponseDivorce';
import Layout from '../../layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function ResponseDivorcePage(props) {
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');
  useEffect(() => {
    if (!token) {
      // history.push('/');
      navigate('/');
    }
  }, []);
  return (
    <Layout>
      <ResponseDivorce role="lawyer" />
    </Layout>
  );
}

export default ResponseDivorcePage;
