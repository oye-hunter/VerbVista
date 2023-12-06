// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Summarizer from "./Summarizer/Summarizer"
const Home = () => {
  return (
    <div style={{width:"100%"}} >
      {/* <h1>Welcome to Your Text Summarizer</h1>
      <p>Get concise summaries for your text quickly and easily.</p> */}
      <Summarizer/>
    </div>
  );
};

export default Home;
