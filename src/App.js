import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './onboarding/LoginPage';
import SignUpPage from './onboarding/SignUpPage';
import RequiresAuth from './Authorization/Auth';
import Home from './pages/Home';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<SignUpPage />} />
            <Route path='/home' element={<RequiresAuth><Home /></RequiresAuth>} />
            {/* <Route path='/profile' element={<RequiresAuth><ProfilePage /></RequiresAuth>} /> */}
        </Routes>
    );
}

export default App;
