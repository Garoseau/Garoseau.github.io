import './App.sass';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';


function App() {
return (
<>
  <BrowserRouter>
    <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
</>
);
}

export default App;
