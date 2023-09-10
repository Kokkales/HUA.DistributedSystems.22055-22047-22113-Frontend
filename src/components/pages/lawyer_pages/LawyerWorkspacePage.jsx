import Layout from '../../layout/Layout';
import LawyerWorkspace from '../../users/lawyers/LawyerWorkspace';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'babel-plugin-react-html-attrs';
import { createBrowserHistory } from 'history';

function LawyerWorkspacePage(props) {
  // const history = createBrowserHistory();
  // const navigate = useNavigate();
  // const token = localStorage.getItem('jwtToken');
  // useEffect(() => {
  //   if (!token) {
  //     // history.push('/');
  //     navigate('/');
  //   }
  // }, []);
  return (
    <Layout userRole="lawyer">
      <LawyerWorkspace role="lawyer" />
    </Layout>
  );
}

export default LawyerWorkspacePage;
