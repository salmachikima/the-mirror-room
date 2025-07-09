import { Link } from 'react-router-dom';
function Devaluation() {
  return (
    <div className="deep-page devaluation">
      <h1>Devaluation</h1>
      <p>
        They started to pick at your softness. Little remarks. Cold silences.
        You were no longer adored. You were slowly dismantled.
      </p>
      <Link to="/" className="btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default Devaluation;
