import { Link } from 'react-router-dom';

function RealMe() {
  return (
    <div className="deep-page real-me">
      <h1>The Real Me</h1>
      <p>
        If you made it here... then maybe you saw the layers I never dared to show.  
        This isn’t just code. It’s my story.  
        I’ve met narcissism — not in books, but in real life.  
        And I'm still surviving it. i'ts not an easy Journey as people may think
        it's a long unfinite loop u can only break from it if you are concious of what's going on around you. 
        I built this project to tell the truth I once buried. And for other people to wake up and start noticing the old narcissistic patterns.
      </p>
      <p>
        I’m soft. I’m fierce. I’m healing.  
        And maybe… so are you.
      </p>

      <Link to="/" className="btn back-btn">← Return to the Mirror Room</Link>
    </div>
  );
}

export default RealMe;