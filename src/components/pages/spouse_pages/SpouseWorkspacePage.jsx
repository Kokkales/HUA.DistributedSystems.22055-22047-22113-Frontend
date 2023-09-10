import Layout from '../../layout/Layout';
import SpouseWorkspace from '../../users/spouses/SpouseWorkspace';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'babel-plugin-react-html-attrs';
import { createBrowserHistory } from 'history';
function SpouseWorkspacePage(props) {
  const history = createBrowserHistory();
  const navigate = useNavigate();
  const token = localStorage.getItem('jwtToken');
  // useEffect(() => {
  // if (!token && props.user != 'SPOUSE') {
  //   history.push('/');
  //   navigate('/');
  // }
  // }, []);
  return (
    <Layout>
      <SpouseWorkspace />
    </Layout>
  );
}

export default SpouseWorkspacePage;
