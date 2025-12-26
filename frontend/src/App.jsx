// src/App.jsx  ← REPLACE YOUR CURRENT FILE WITH THIS
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProtectedRoute from './components/ProtectedRoute';
import PostProject from './pages/PostProject';
import Services from './pages/Services';
import About from './pages/AboutPage';
import Contact from './pages/Contact';

function RootRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token && (location.pathname === '/login' || location.pathname === '/register')) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate, location]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <RootRedirect />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* PUBLIC PAGES – ANYONE CAN SEE */}
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* PROTECTED PAGES */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/post-project" element={<PostProject />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;