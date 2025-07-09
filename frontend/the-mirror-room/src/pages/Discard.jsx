import { Link } from 'react-router-dom';
function Discard() {
  return (
    <div className="deep-page Discard">
      <h1>Discard</h1>
      <p>
        The moment you will think u lost your self after all the love bombing
        the start of the end
      </p>
      <Link to="/" className="btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default Discard;
