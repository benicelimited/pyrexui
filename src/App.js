import React,{useState} from 'react';
import Landing from './Landing';
import { ReactSession } from 'react-client-session';
import Dash from './Dash';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResidentialPage from './ResidentialPage'
import IspPage from './IspPage'
import Auth from './Auth';
import Checkout from './Checkout';

function App() {
  ReactSession.setStoreType("localStorage");
  return (
      <Router basename=''>
        <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/auth'element={<Auth />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/resi" element={<ResidentialPage />} />
        <Route path="/isp" element={<IspPage />} />
        <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
  );
}

export default App;
