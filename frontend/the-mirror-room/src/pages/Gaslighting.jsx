import { Link } from 'react-router-dom';
function Gaslighting() {
  return (
    <div className="deep-page gaslighting">
      <h1>Gaslighting</h1>
      <p>
        “That didn’t happen.” “You misunderstood.” “You’re too emotional.”
        Your memory twisted. Your sense of reality slipped like mist.
      </p>
      <Link to="/" className="btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default Gaslighting;
