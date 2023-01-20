import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import ProfilePage from './components/pages/Profile';
import LawyerWorkspace from './components/pages/lawyer_pages/LawyerWorkspace';
import SpouseWorkspace from './components/pages/spouse_pages/SpouseWorkspace';
import NotaryWorkspace from './components/pages/notary_pages/NotaryWorkspace';
import AdminWorkspacePage from './components/pages/admin_pages/AdminWorkspacePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />{' '}
      <Route path="register" element={<RegistrationPage />} />{' '}
      <Route path="/lawyer/workspace" element={<LawyerWorkspace />} />{' '}
      <Route path="/notary/workspace" element={<NotaryWorkspace />} />{' '}
      <Route path="/spouse/workspace" element={<SpouseWorkspace />} />{' '}
      <Route path="/admin/workspace" element={<AdminWorkspacePage />} />{' '}
      <Route path="/user/profile" element={<ProfilePage />} />{' '}
    </Routes>
  );
}

export default App;
