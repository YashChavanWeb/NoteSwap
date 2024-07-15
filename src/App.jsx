import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Landing Page/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import ContactUs from './components/Landing Page/ContactUs';
import AboutUs from './components/Landing Page/AboutUs';
import DemoNotes from './components/Landing Page/DemoNotes';
import Dashboard from './components/Dashboard/Dashboard';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';
import Footer from './components/Landing Page/Footer';

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/notes" element={<DemoNotes />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
