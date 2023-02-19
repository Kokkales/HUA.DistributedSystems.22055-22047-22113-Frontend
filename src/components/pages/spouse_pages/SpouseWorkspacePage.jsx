import Layout from '../../layout/Layout';
import SpouseWorkspace from '../../users/spouses/SpouseWorkspace';

function SpouseWorkspacePage(props) {
  return (
    <Layout>
      <SpouseWorkspace role="spouse" />
    </Layout>
  );
}

export default SpouseWorkspacePage;
