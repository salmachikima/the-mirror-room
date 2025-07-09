import { Link } from 'react-router-dom';
function Idealization() {
  return (
    <div className="deep-page idealization">
      <h1>Idealization</h1>
      <p>
        In the beginning, they made you feel divine...
        but it wasn’t real love, it was projection.
      </p>
      <Link to="/" className="btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default Idealization;
