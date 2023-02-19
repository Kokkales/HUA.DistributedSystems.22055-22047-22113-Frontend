import Layout from '../../layout/Layout';
import LawyerWorkspace from '../../users/lawyers/LawyerWorkspace';

function LawyerWorkspacePage(props) {
  return (
    <Layout>
      <LawyerWorkspace role="lawyer" />
    </Layout>
  );
}

export default LawyerWorkspacePage;
