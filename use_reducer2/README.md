# useReducer Hook을 사용한 Todolist

const initialState = { <br/>
  count: 0, <br/>
  content: [], <br/>
}; <br/>
useReducer(reducer, initialState); <br/>
reducer(state, action); <br/>
switch(action.type){ <br/>
    case 'insert': <br/>
      const text = action.payload.text; <br/>
      const newContent = {id: Date.now(), text}; <br/>
      return { <br/>
        count: state.count + 1, <br/>
        content: [...state.content, newContent], <br/>
      }; <br/>
    default: <br/>
     return state; <br/>
}