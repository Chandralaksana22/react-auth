import React, { useState, useEffect } from 'react';
import LoginPage from '../Login/LoginPage';
import Home from '../../components/Home';

const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);
  
    if (!isLoggedIn) {
      return <LoginPage />;
    }
  
    return (
    <div className="container mx-auto px-[10rem] lg:px-[20rem] py-[10rem]">
        <Home/>
      </div>
    );
  };
  
  export default HomePage;