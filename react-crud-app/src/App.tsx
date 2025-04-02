import React from 'react';
import Home from './Page/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Page/Notfound';

function App() {
  return (
    // <>
    //   <Home />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
