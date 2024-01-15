import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Summarizers from "./Pages/Summarizer/Summarizers"
import Plag from "./Pages/Plagcheck/Plag"
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import { MantineProvider } from '@mantine/core';

function App() {
 return (
  <MantineProvider>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/plag" element={<Plag />} />
      <Route exact path="/summarizers" element={<Summarizers />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </MantineProvider>
);}

export default App;