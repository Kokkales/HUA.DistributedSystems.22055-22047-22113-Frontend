import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import LawyerPage from './components/pages/LawyerPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />{' '}
      <Route path="/register" element={<RegistrationPage />} />{' '}
      <Route path="/lawyer" element={<LawyerPage />} />{' '}
    </Routes>
  );
}

export default App;
