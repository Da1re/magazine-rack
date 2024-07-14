import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import MainApp from './App/Main/MainApp';

import './App.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path="/" element={<MainApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
