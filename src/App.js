import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  // Fetch random quote
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  // Save the current quote to the list
  const saveQuote = () => {
    if (quote && !savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote on component mount
  }, []);

  return (
    <div className="App">
      <h1>Random Quotes</h1>
      <button className="fetch-btn" onClick={fetchQuote}>Get New Quote</button>
      {quote && <QuoteCard quote={quote} saveQuote={saveQuote} />}
      
      <h2>Saved Quotes</h2>
      <div className="saved-quotes">
        {savedQuotes.length > 0 ? (
          savedQuotes.map((q, index) => <QuoteCard key={index} quote={q} />)
        ) : (
          <p>No saved quotes yet!</p>
        )}
      </div>
    </div>
  );
}

export default App;
