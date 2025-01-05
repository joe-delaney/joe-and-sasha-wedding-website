import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Schedule from './components/Schedule'
import FAQs from './components/FAQs'

const OurStory = () => <div className="container mx-auto p-4">Our story goes here.</div>;
const Travel = () => <div className="container mx-auto p-4">Travel information here.</div>;
const ThingsToDo = () => <div className="container mx-auto p-4">Things to do in the area.</div>;
const Registry = () => <div className="container mx-auto p-4">Registry information here.</div>;

function App() {
  return (
    <Router>
      <Header />
      <main className="bg-light-blue-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
