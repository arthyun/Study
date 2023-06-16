import { createStore } from 'redux';
import rightClickTest from './rightClickTest';

//Target 지정
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//Reducer 정의
const rootReducer = (state = [], action) => {
  //action은 항상 객체로서 전달되어야 함
  switch(action.type){
    case ADD_TODO:
      return [{ id: Date.now(), text: action.payload.text }, ...state];
    case DELETE_TODO:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  };
};

//Store 정의
const store = createStore(rootReducer);

//store 변화를 감지하면 콜백함수 실행
store.subscribe(() => console.log(store.getState()));

//함수 정의
const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, payload: { text: text } });
};

const deleteToDo = (e) => {
  //HTML에서 불러온 id값은 초기에 String으로 되어 있어서 Number로 전환해야함(Number/parseInt)
  const identify = Number(e.target.parentNode.id);
  store.dispatch({ type: DELETE_TODO, payload: { id: identify } });
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  })
};
store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);