// import LoginForm from '../users/LoginForm';
import RegistrationForm from '../users/RegistrationForm';
import LoginLayout from '../layout/LoginLayout';
// import RegisterLayout from '../layout/RegisterLayout';

function RegistrationPage(props) {
  return (
    <LoginLayout>
      <RegistrationForm />
    </LoginLayout>
  );
}

export default RegistrationPage;
