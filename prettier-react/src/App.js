import "./styles/App.css";
import React, { useContext } from "react";
import { TestContext } from "./store";
import QueryPage from "./QueryPage";

const App = () => {
  const testContext1 = useContext(TestContext);
  console.log(testContext1);

  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br />
        <QueryPage />
      </header>
    </div>
  );
};

export default App;
