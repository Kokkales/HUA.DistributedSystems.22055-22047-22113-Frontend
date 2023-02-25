import Layout from '../../layout/Layout';
import CreateDivorce from '../../users/lawyers/CreateDivorce';
function CreateDivorcePage(props) {
  return (
    <Layout>
      <CreateDivorce isEditType={false} />
    </Layout>
  );
}

export default CreateDivorcePage;
