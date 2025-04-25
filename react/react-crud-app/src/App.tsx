import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import CountryLogic from './Pages/MasterData/Country/Country.logic';
import StateLogic from './Pages/MasterData/State/State.logic';
import CityLogic from './Pages/MasterData/City/City.logic';

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/country" element={<CountryLogic />} />
          <Route path="/state" element={<StateLogic />} />
          <Route path="/city" element={<CityLogic />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
