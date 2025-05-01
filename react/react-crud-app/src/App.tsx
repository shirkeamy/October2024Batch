import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import CountryLogic from './Pages/MasterData/Country/Country.logic';
import StateLogic from './Pages/MasterData/State/State.logic';
import CityLogic from './Pages/MasterData/City/City.logic';
import InstituteDetails from './Pages/InstituteMaster/InstituteDetails';
import CoursesLogic from './Pages/InstituteMaster/Courses/Courses.logic';
import SubjectLogic from './Pages/InstituteMaster/Subject/Subject.logic';
import Layout from './Components/Layout';

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

          <Route path="/crud/institute/" element={<Layout><InstituteDetails /></Layout>}>
            <Route path="courses" element={<CoursesLogic />} />
            <Route path="subjects" element={<SubjectLogic />} />
          </Route>


          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
