# useReducer Hook 사용하기

useReducer(reducer, initialState); <br/>
reducer(state, action); <br/>
switch(action.type){ <br/>
    case '': <br/>
     return state + action.payload; <br/>
    default: <br/>
     return state; <br/>
}