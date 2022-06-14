import './App.scss';
import React from 'react';
import Articles from './components/Articles';
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Propos from './components/Propos';
import Contact from './components/Contact'


function App() {
return (
<>

  <BrowserRouter>
    <Routes>

      <Route element={<Navbar />}>
        <Route path="/" element={<Home />}/>
        <Route path="/Work" element={<Articles />}/>
        <Route path="/Propos" element={<Propos />}/>
        <Route path="/Contact" element={<Contact />}/>

      </Route>

    </Routes>
  </BrowserRouter>

</>
);
}

export default App;
