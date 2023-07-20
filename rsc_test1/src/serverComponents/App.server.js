import '../styles/App.css';
import Sub1 from '../clientComponents/Sub1.client';

function App() {
  // console.log('Im ServerComponent');

  return (
    <div className="App">
      <header className="App-header">
        <img src="./logo.svg" className="App-logo" alt="logo" />
        <br />
        {/* Client Components */}
        <Sub1 />
      </header>
    </div>
  );
}

export default App;
