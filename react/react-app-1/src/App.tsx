import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from "./Pages/About";
import Contact from './Pages/Contact';
import User from './Pages/User';
import CompoentA from './Components/CompoentA';

export const data = createContext("");
export const data1 = createContext("");

function App() {

  const userName: string = "John Doe";

  return (
    <>
      {/* <Home></Home> */}
      <Home />
      <About />
      <Contact />
      <User userName={userName} />
      <data.Provider value="Peter Parker">
        <data1.Provider value="Mumbai">
          <CompoentA name={userName} address={'Pune'} />
        </data1.Provider>
      </data.Provider>
    </>
  );
}

export default App;
