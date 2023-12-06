
import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {/* Add your FAQ content here */}
      <p>Question 1: Lorem ipsum dolor sit amet?</p>
      <p>Answer 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      {/* Add more questions and answers as needed */}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default FAQ;
