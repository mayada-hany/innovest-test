import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/LandingPage/Navbar.jsx'; 
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Footer from './pages/LandingPage/Footer.jsx'; 

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/invest" element={<div>Invest Page</div>} />
          <Route path="/how-it-works" element={<div>How It Works Page</div>} />
          <Route path="/discover" element={<div>Discover Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/get-started" element={<div>Get Started Page</div>} />
          <Route path="/sign-in" element={<div>Sign In Page</div>} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
