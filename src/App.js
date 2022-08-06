import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer>
        <small>
          Coded by Maria Sokolova <br /> Open-sourced on{" "}
          <a href="https://github.com/MariaASokolova/dictionary-app">GitHub</a>{" "}
          and hosted on <a href="https://www.netlify.com/">Netlify</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
