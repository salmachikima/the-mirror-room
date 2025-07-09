import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function QuoteRoom() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/quotes')
      .then(res => res.json())
      .then(data => setQuotes(data));
  }, []);

  function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }

  return (
    <div className="deep-page quote-room">
      <h1>Lumière's Voice</h1>
      <p className="whisper">Click to hear what the mirror wants to tell you...</p>

      <button onClick={generateQuote} className="btn">💬 Tell me something I need to hear</button>

      {quote && (
        <blockquote className="quote">{quote}</blockquote>
      )}

      <Link to="/" className="btn back-btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default QuoteRoom;
