import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './views/NavigationBar';
import Footer from './views/Footer';

function App() {
  return (
    <>
      <NavigationBar/>
      <Footer/>
    </>
  );
}

export default App;
