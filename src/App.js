import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule'
import FAQs from './components/FAQs'
import Travel from './components/Travel'
import OurStory from './components/OurStory'
import RSVP from './components/RSVP'

const Registry = () => <div className="container mx-auto p-4">Registry information here.</div>;

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-light-blue-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<RSVP />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
