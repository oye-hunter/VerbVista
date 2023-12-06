import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Summarizers from "./Pages/Summarizer/Summarizers"
import Plag from "./Pages/Plagcheck/Plag"
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
    </Router>
    // </Router>
      );
}

export default App;