import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import ProfilePage from './components/pages/Profile';
import LawyerWorkspacePage from './components/pages/lawyer_pages/LawyerWorkspacePage';
import SpouseWorkspacePage from './components/pages/spouse_pages/SpouseWorkspacePage';
import NotaryWorkspacePage from './components/pages/notary_pages/NotaryWorkspacePage';
import AdminWorkspacePage from './components/pages/admin_pages/AdminWorkspacePage';
import EditProfileForm from './components/users/EditProfileForm';
import CreateDivorcePage from './components/pages/lawyer_pages/CreateDivorcePage';
import StatisticsPage from './components/pages/admin_pages/StatisticsPage';
import ChooseRegistryPage from './components/pages/ChooseRegistryPage';
import ResponseDivorcePage from './components/pages/lawyer_pages/ResponseDivorcePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />{' '}
      <Route path="register" element={<RegistrationPage />} />{' '}
      <Route path="chooseRegister" element={<ChooseRegistryPage />} />{' '}
      <Route path="lawyer/workspace" element={<LawyerWorkspacePage />} />
      {''}
      <Route
        path="lawyer/workspace/response"
        element={<ResponseDivorcePage />}
      />
      <Route
        path="lawyer/workspace/new-divorce"
        element={<CreateDivorcePage />}
      />{' '}
      <Route path="notary/workspace" element={<NotaryWorkspacePage />} />{' '}
      <Route path="spouse/workspace" element={<SpouseWorkspacePage />} />{' '}
      <Route path="admin/workspace" element={<AdminWorkspacePage />} />{' '}
      <Route path="admin/workspace/statistics" element={<StatisticsPage />} />{' '}
      <Route path="user/profile" element={<ProfilePage />} />{' '}
      <Route path="user/editProfileForm" element={<EditProfileForm />} />{' '}
    </Routes>
  );
}

export default App;
