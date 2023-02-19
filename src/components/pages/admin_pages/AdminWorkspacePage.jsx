import Layout from '../../layout/Layout';
import AdminWorkspace from '../../users/admin/AdminWorkspace';

function AdminWorkspacePage(props) {
  return (
    <Layout>
      <AdminWorkspace role="admin" />
    </Layout>
  );
}

export default AdminWorkspacePage;
