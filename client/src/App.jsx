import React from 'react';
import Navbar from './components/commons/Navbar';
import Header from './components/commons/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
