import { Link } from 'react-router-dom';
function Reflection() {
  return (
    <div className="deep-page Reflection">
      <h1>Reflection</h1>
      <p>
        The healing part while u will start regaining your conciousness and get to know the toxic loop way better
        you will start reflecting on your self and seeing the patterns
        and maybe realize it's time to move on for good
      </p>
      <Link to="/" className="btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default Reflection;