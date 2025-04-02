import React from 'react';
import Home from './Page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Page/Notfound';
import Country from './Page/Country/Country';

function App() {
  return (
    // <>
    //   <Home />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/country' element={<Country />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
