import {createStore} from 'redux';

let store = createStore((state, action) => {
    if(state === undefined){
        return {para: []}
    }
    if(action.type === 'INCREMENT'){
        return {...state.push({'id': action.id, 'text': action.para}) }
    }
    
    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;