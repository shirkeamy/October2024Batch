import React from 'react';
import Home from './Page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Page/Notfound';
import State from './Page/State/State';
import CountryLogic from './Page/Country/Country.logic';

function App() {
  return (
    // <>
    //   <Home />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/country' element={<CountryLogic />} />
        <Route path='/state' element={<State />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
