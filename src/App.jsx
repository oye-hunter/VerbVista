import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
// import About from './Components/FAQ';
import Summarizer from './Components/Summarizer/Summarizer';
import FAQ from './Components/FAQ';
import Header from "./Components/Header/Header"
import "./App.css"
import Footer from './Components/Footer/Footer';


function App() {
 return (
  <>
          <Header/>
          <Summarizer/>
          <Footer/>
          </>
      //   </Routes>
      //   <Routes>
      //     <Route path="/summarizer" element={<Summarizer />} />
      //   </Routes>
      //   <Routes>
      //     <Route path="/faq" element={<FAQ />} />
      //   </Routes>
      // </Router>
      );
}

export default App;