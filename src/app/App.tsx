import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <img src={logo} alt="" />
      <Routes>
        <Route path="/">
          <main>Home</main>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
