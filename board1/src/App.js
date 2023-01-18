import './App.css';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  console.log(useSelector(state => state.test1));

  //React Hook은 호출 시 무조건 컴포넌트 내에서 호출해야한다.
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <button onClick={() => {
        dispatch(
          {type:'increment', payload: {id: 1, subject: '두번째 제목', content: '두번째 내용', date: `${new Date().toLocaleDateString()}`}});
      }}>클릭해 보시오</button>
    </div>
  );
}

export default App;
