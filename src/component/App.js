import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from './Container/Container';
import "../styles.css"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />} path="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;