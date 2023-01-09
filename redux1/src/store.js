import {createStore} from 'redux';

let store =  createStore(function(state, action){
    if(state === undefined){
        return {number: 0, text: ''}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number: state.number + action.size}
    }
    if(action.type === 'DECREMENT'){
        return {...state, number: state.number - action.size}
    }
    if(action.type === 'testText'){
        return {...state, text: action.text}
    }
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;