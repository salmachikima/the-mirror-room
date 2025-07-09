import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Idealization from './pages/Idealization'
import Devaluation from './pages/Devaluation'
import Gaslighting from './pages/Gaslighting'
import Reflection from './pages/reflection';
import Discard from './pages/Discard';
// You can import other sections like Reflection, Discard if ready

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="container">
            <section className="section intro">
              <h1>The Mirror Room</h1>
              <p className="whisper">“Come closer. You’re everything I ever needed.”</p>
            </section>

            <section className="section idealization">
              <h2>Idealization</h2>
              <p>“You're perfect. You're different. You’re mine.”</p>
              <Link to="/idealization" className="btn">Enter the Illusion</Link>
            </section>

            <section className="section devaluation">
              <h2>Devaluation</h2>
              <p>“You’re too sensitive. You misunderstood.”</p>
              <Link to="/devaluation" className="btn">Reveal the Fall</Link>
            </section>

            <section className="section gaslighting">
              <h2>Gaslighting</h2>
              <p>“That didn’t happen.” “You’re remembering it wrong.”</p>
              <Link to="/gaslighting" className="btn">See the Distortion</Link>
            </section>

            <section className="section discard">
        <h2>Discard</h2>
        <p>“You were never enough.”</p>
        <Link to="/Discard" className="btn">left in the cold</Link>
      </section>

      <section className="section reflection">
        <h2>Reflection</h2>
        <p>“You are still real. You are not what they did to you. You survived.”</p>
        <Link to="/Reflection" className="btn">self conciousness</Link>
      </section>

            {/* You can continue with Discard + Reflection sections here if you want */}
          </main>
        }
      />

      <Route path="/idealization" element={<Idealization />} />
      <Route path="/devaluation" element={<Devaluation />} />
      <Route path="/gaslighting" element={<Gaslighting />} />
      <Route path="/Discard" element={<Discard />} />
      <Route path="/Reflection" element={<Reflection />} />

      {/* Add other routes when ready */}
    </Routes>
  )
}

export default App
