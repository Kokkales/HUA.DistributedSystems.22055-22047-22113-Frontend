import Layout from '../../layout/Layout';
import CreateDivorce from '../../users/lawyers/CreateDivorce';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function CreateDivorcePage(props) {
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
      <CreateDivorce isEditType={false} />
    </Layout>
  );
}

export default CreateDivorcePage;
