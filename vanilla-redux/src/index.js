import { createStore } from 'redux';
import rightClickTest from './rightClickTest';


const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

//Reducer 정의
const countModifier = (state = 0, action) => {
  //action은 항상 객체로서 전달되어야 함
  switch(action.type){
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  };
};

//Store 정의
const countStore = createStore(countModifier);

const onChange = () => {
  // console.log('there was change on the store');
  number.innerText = countStore.getState();
}

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
  // console.log(countStore.getState());
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
  // console.log(countStore.getState());
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

//store 변화를 감지하면 콜백함수 실행
countStore.subscribe(onChange);