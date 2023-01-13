# useReducer Hook을 사용한 Bank

useReducer(reducer, initialState); <br/>
reducer(state, action); <br/>
switch(action.type){ <br/>
    case '': <br/>
     return state + action.payload; <br/>
    default: <br/>
     return state; <br/>
}