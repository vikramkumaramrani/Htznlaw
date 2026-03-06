import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreasPage from './pages/PracticeAreasPage';
import ContactPage from './pages/ContactPage';
import FloatingCTA from './components/FloatingCTA';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <FloatingCTA />
        <Footer />
      </div>
    </Router>
  );
}
