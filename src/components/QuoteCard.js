import React from 'react';
import '../QuoteCard.css';

const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p>"{quote}"</p>
      {saveQuote && (
        <button className="save-btn" onClick={saveQuote}>
          Save to List
        </button>
      )}
    </div>
  );
};

export default QuoteCard;
