import './App.css';
import Customer from './components/Customer';


const customers = [
  {
    id: 1,
    image: 'http://placeimg.com/64/64/any',
    name: '홍길동',
    birthday: '961222',
    gender: '200',
    job: '대학생'
  },
  {
    id: 2,
    image: 'http://placeimg.com/64/64/any',
    name: '김김김',
    birthday: '931222',
    gender: '200',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'http://placeimg.com/64/64/any',
    name: '손손손',
    birthday: '981222',
    gender: '200',
    job: '의사'
  }
]

function App() {

  return (
    <div className="App">
      <div className="App-header">
          {
            customers.map((lists, i) => {
              return (
                <Customer key={i}
                  id={lists.id}
                  image={lists.image}
                  name={lists.name} 
                  birthday={lists.birthday} 
                  gender={lists.gender} 
                  job={lists.job} />
                )
            })
          }
          {/* {
            <Customer
            id={customers[0].id}
            image={customers[0].image}
            name={customers[0].name} 
            birthday={customers[0].birthday} 
            gender={customers[0].gender} 
            job={customers[0].job} />
          } */}
      </div>
    </div>
  );
}

export default App;
