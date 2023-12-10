import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Summarizers from "./Pages/Summarizer/Summarizers"
import Plag from "./Pages/Plagcheck/Plag"
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Summarizer from "./Components/Summarizer/Summarizer"

function App() {
 return (
  <Router>
        <Routes>
          <Route path="/Plag" element={<Plag />} />
        </Routes>
        <Routes>
      <Route path="/" element={<Summarizers />} />
    </Routes>

    <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>

        <Routes>
          <Route path="/Register" element={<Register />} />
        </Routes>


    </Router>
    // </Router>
      );
}

export default App;