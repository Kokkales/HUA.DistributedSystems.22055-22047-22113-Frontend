import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import LoginLayout from './components/layout/LoginLayout';

function App() {
  return (
    <Routes>
      {/* <LoginLayout> */}
      <Route path="/" element={<LoginPage />} />
      {/* </LoginLayout> */}
    </Routes>
  );
}

export default App;
