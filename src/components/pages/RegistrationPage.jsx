import RegistrationForm from '../users/RegistrationForm';
import LoginLayout from '../layout/auth_layout/LoginLayout';

function RegistrationPage(props) {
  return (
    <LoginLayout>
      <RegistrationForm />
    </LoginLayout>
  );
}

export default RegistrationPage;
