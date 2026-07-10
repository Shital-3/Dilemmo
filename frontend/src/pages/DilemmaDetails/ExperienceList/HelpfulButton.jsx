import React, { useState } from 'react';

const HelpfulButton = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [clicked, setClicked] = useState(false);

  return (
    <button 
      className={`helpful-action-pill ${clicked ? 'voted' : ''}`} 
      onClick={() => { if(!clicked) { setCount(count+1); setClicked(true); } }}
      style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer', color: '#4b5563' }}
    >
      👍 Helpful ({count})
    </button>
  );
};

export default HelpfulButton;