// PlagiarismChecker.js

import React, { useState } from 'react';
import './Plagchkr.css';
import React from "react";
import { Link } from "react-router-dom";
import "./Plag.css";
import academic from "../../../public/Assets/academic.png"
import everyday from "../../../public/Assets/everyday.png"
import business from "../../../public/Assets/business.png"
import difficult from "../../../public/Assets/difficult.png"

const PlagiarismChecker = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState(null);

  const checkPlagiarism = () => {
    // Add your plagiarism checking logic here
    // For demonstration, let's assume a basic check for identical text
    const isPlagiarized = text1.trim() === text2.trim();
    setResult(isPlagiarized ? 'Plagiarized' : 'Not Plagiarized');
  };

  return (
    <div className="plagiarism-container">
      <div className="plagiarism-form">
        <h2>Plagiarism Checker</h2>
        <p className='p-1'>plagiarism checker detects plagiarism in your text and checks for other writing issues.</p>
        <textarea
          placeholder="Enter text for comparison"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          placeholder="Enter text for comparison"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
        <button onClick={checkPlagiarism}>Check Plagiarism</button>
        {result && <div className={`result ${result.toLowerCase()}`}>{result}</div>}
      </div>
    </div>
  );
};

export default PlagiarismChecker;
