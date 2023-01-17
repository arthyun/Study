import './App.css';
import Header from './components/Header';
import store from './store.js';

console.log(store.getState().board);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
