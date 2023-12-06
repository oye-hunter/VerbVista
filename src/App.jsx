import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Summarizers from './Pages/Summarizers/Summarizers';
import Plag from "./Pages/Plagcheck/Plag"

function App() {
 return (
  <>
         <Summarizers/>
          </>
    //      </Routes>
    //     <Routes>
    //       <Route path="/Plag" element={<Plag />} />
    //     </Routes>
    //     <Routes>
    // //       <Route path="/faq" element={<FAQ />} />
    // //     </Routes>
    // //   </Router>
      );
}

export default App;