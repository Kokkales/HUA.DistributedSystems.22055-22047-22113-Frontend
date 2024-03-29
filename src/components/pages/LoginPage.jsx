import LoginForm from '../users/LoginForm';
import LoginLayout from '../layout/auth_layout/LoginLayout';

function LoginPage(props) {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  );
}

export default LoginPage;
