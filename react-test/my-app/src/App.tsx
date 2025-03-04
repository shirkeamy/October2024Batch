import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import User from './Pages/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactHooks from './Pages/ReactHooks';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user-details' element={<User />} />
        <Route path='/react-hooks' element={<ReactHooks />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
