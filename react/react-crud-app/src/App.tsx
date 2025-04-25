import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import State from './Pages/MasterData/State/State';
import City from './Pages/MasterData/City/City';
import CountryLogic from './Pages/MasterData/Country/Country.logic';

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/country" element={<CountryLogic />} />
          <Route path="/state" element={<State />} />
          <Route path="/city" element={<City />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
