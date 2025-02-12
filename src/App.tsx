import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdmissionPredictor from './pages/AdmissionPredictor';
import JobMarket from './pages/JobMarket';
import CareerRecommendation from './pages/CareerRecommendation';
import Opportunities from './pages/Opportunities';
import AIAssistant from './pages/AIAssistant';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission-predictor" element={<AdmissionPredictor />} />
            <Route path="/job-market" element={<JobMarket />} />
            <Route path="/career-recommendation" element={<CareerRecommendation />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;