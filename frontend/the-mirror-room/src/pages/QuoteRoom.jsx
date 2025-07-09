import { useState } from 'react';
import { Link } from 'react-router-dom';

const quotes = [
  "You don’t have to become fire to be seen. Sometimes, the candle is enough.",
  "You were never too much. They were simply too little for your depth.",
  "Softness was never your weakness. It was your hidden shield.",
  "Healing doesn’t mean forgetting. It means remembering without pain.",
  "Even the moon shows her scars. That’s how she glows.",
  "The mirror didn’t lie — but the one who held it did.",
  "You’re not here to be understood by everyone. You’re here to remember yourself.",
  "Every time you broke, you became more whole. That’s the irony of light."
];

function QuoteRoom() {
  const [quote, setQuote] = useState('');

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
