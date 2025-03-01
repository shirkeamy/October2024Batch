import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import User from './Pages/User';

function App() {
  return (
    <>
      <Home />
      <About />
      <Contact />
      <User userName='John Doe' />
    </>
  );
}

export default App;
