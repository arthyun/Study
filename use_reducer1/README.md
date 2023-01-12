# useReducer 사용하기

useReducer(reducer, initialState);
reducer(state, action);
switch(action.type){
    case '':
     return state + action.payload;
    default:
     return state;
}