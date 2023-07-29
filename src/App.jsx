// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserDetailPage from './pages/User/UserDetailPage';
import './index.css'
import LoginPage from './pages/Login/LoginPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
