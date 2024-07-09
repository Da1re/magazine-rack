import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainApp from './App/Main/MainApp';

import './App.css';
import './index.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="wrap">
        <Header />
        <Routes>
          {/* <Route path="/" element={<LayoutWithOutHeader />} />
          <Route path="/*" element={<LayoutWithHeader />} /> */}

          <Route path="/" element={<MainApp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
