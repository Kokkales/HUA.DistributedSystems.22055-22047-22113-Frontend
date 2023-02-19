import Layout from '../../layout/Layout';
import NotaryWorkspace from '../../users/notaries/NotaryWorkspace';

function NotaryWorkspacePage(props) {
  return (
    <Layout>
      <NotaryWorkspace role="notary" />
    </Layout>
  );
}

export default NotaryWorkspacePage;
