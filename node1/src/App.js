import './App.css';
import Customer from './components/Customer';


const customer = {
  name: '홍길동',
  birthday: '961222',
  gender: '200',
  job: '대학생'
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
          {<Customer 
            name={customer.name} 
            birthday={customer.birthday} 
            gender={customer.gender} 
            job={customer.job} />}
      </header>
    </div>
  );
}

export default App;
