import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from "./Pages/About";
import Contact from './Pages/Contact';
import User from './Pages/User';
import CompoentA from './Components/CompoentA';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactHooks from './Pages/Hooks/ReactHooks';

export const data = createContext("");
export const data1 = createContext("");

function App() {

  const userName: string = "John Doe";

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='user-master' element={<User userName={userName} />} />
          <Route path='hooks' element={<ReactHooks />} />
        </Routes>
      </BrowserRouter>

      {/* <Home></Home> */}
      {/* <Home />
      <About />
      <Contact />
      <User userName={userName} />
      <data.Provider value="Peter Parker">
        <data1.Provider value="Mumbai">
          <CompoentA name={userName} address={'Pune'} />
        </data1.Provider>
      </data.Provider> */}
    </>
  );
}

export default App;
