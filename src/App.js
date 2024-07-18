import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainApp from './App/Main/MainApp';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import './App.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="wrap">
        <Loading />
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
