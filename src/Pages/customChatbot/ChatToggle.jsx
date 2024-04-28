// ChatToggleButton.js
import React from 'react';
import chaticon from '/Assets/bubble.png'

const ChatToggleButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick} style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      zIndex: 1001,
      cursor: 'pointer',
      fontSize: '24px',
      padding: '10px 20px',
      borderRadius: '50%',
      backgroundColor: 'white',
      color: 'white',
      border: 'none',
      background:'none',
    }}>
    <img src={chaticon} alt="Chat" style={{ width: '50px', height: '50px' }} />
    </button>
  );
};

export default ChatToggleButton;
