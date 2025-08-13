import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QRCodePage from './pages/QRcodePage/QRCodePage.tsx';
import Login from './pages/Login/Login.tsx';
import Admin from './pages/Admin/Admin.tsx';
import Home from './pages/Home/Home.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home/:id" element={<Home />} />
      </Routes>
    </Router>
  );
}
