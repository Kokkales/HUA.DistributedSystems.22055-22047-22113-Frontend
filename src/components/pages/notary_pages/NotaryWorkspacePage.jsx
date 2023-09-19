import Layout from '../../layout/Layout';
import NotaryWorkspace from '../../users/notaries/NotaryWorkspace';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'babel-plugin-react-html-attrs';
import { useEffect } from 'react';
import { createBrowserHistory } from 'history';
function NotaryWorkspacePage(props) {
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
      <NotaryWorkspace role="notary" />
    </Layout>
  );
}

export default NotaryWorkspacePage;
