# useReducer Hook 사용하기

useReducer(reducer, initialState); <br/>
reducer(state, action); <br/>
switch(action.type){
    case '':
     return state + action.payload;
    default:
     return state;
}