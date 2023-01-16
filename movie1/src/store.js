import {createStore} from 'redux';

const initialState = {
    main: [{타이틀: '테스트1', 제작사: '테스트1'}],
};

let store = createStore((state, action) => {
    switch(action.type || state === undefined){
        case 'increment':
            const newArr = {타이틀: action.payload.title, 제작사: action.payload.made}
            return {
                main: [...state.main, newArr],
            };
        default :
            return initialState;
    }
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;