import './App.css';
function App() {
  return (
    <main className="container">
      <section className="section intro">
        <h1>The Mirror Room</h1>
        <p className="whisper">“Come closer. You’re everything I ever needed.”</p>
      </section>

      <section className="section idealization">
        <h2>Idealization</h2>
        <p>“You're perfect. You're different. You’re mine.”</p>
      </section>

      <section className="section devaluation">
        <h2>Devaluation</h2>
        <p>“You’re too sensitive. You misunderstood.”</p>
      </section>

      <section className="section gaslighting">
        <h2>Gaslighting</h2>
        <p>“That didn’t happen.” “You’re remembering it wrong.”</p>
      </section>

      <section className="section discard">
        <h2>Discard</h2>
        <p>“You were never enough.”</p>
      </section>

      <section className="section reflection">
        <h2>Reflection</h2>
        <p>“You are still real. You are not what they did to you. You survived.”</p>
      </section>
    </main>
  );
}

export default App;
