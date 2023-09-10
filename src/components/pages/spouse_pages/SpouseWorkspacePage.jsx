import Layout from '../../layout/Layout';
import SpouseWorkspace from '../../users/spouses/SpouseWorkspace';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { useEffect } from 'babel-plugin-react-html-attrs';
import { createBrowserHistory } from 'history';
function SpouseWorkspacePage(props) {
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
      <SpouseWorkspace />
    </Layout>
  );
}

export default SpouseWorkspacePage;
