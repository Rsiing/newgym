import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Navdash from './components/Navdash'
import './App.css'

function AppContent() {
  const location = useLocation();
  const navAndFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/dashboard';
 

 

  return (
    <>
      {!navAndFooter && <Navbar />}
      <Routes>
        <>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </>
        <Route path="/dashboard" element={<><Navdash /><Dashboard /><Footer /></>} />
      </Routes>
      {!navAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
