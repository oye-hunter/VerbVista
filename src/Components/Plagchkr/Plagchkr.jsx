// PlagiarismChecker.js

import React, { useState } from 'react';
import './Plagchkr.css';

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
