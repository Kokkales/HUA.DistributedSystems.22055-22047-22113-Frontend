import Layout from '../../layout/Layout';
import AdminWorkspace from '../../users/admin/AdminWorkspace';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminWorkspacePage(props) {
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
      <AdminWorkspace role="admin" />
    </Layout>
  );
}

export default AdminWorkspacePage;
