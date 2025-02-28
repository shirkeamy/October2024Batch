import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const userName: string = "Peter";

  return (
    <>
      <h1 className="">Welcome, {userName}</h1>
      <p>
        {1 + 1}
      </p>
    </>
  );
}

export default App;
