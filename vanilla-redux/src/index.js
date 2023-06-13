import { createStore } from 'redux';

const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (state = 0, action) => {
  //action 타입 정의
  switch(action.type){
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  };
};
const countStore = createStore(countModifier);

// countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());


//바닐라만 사용해서 변수를 조작했다면...
// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// plus.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);