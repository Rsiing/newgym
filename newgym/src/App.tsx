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
  const navAndFooter = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/dashboard' || location.pathname === '/contactdash';
 

 

  return (
    <>
      {!navAndFooter && <Navbar />}
      <Routes>
        <>
        <Route path="/" element={<><Hero /><About /><Contact /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </>
        <Route path="/dashboard" element={<><Navdash /><Dashboard /><Footer /></>} />
        <Route path='/contactdash' element={<><Navdash /><Contact /></>} />
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
