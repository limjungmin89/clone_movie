import "./App.css";
import { useState } from "react";

function App() {
  const [test, setTest] = useState(0);

  const testChange = () => {
    setTest(1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{test}</p>
        <input type="button" onClick={testChange}></input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Movie Strart
        </a>
      </header>
    </div>
  );
}

export default App;
