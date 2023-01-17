import {createStore} from 'redux';

const count = 1;

const initialState = {
    board : [{
        id: count,
        subject: '첫번째 게시물 제목입니다.',
        content: '첫번째 게시물 내용입니다.',
        date: `${new Date().toLocaleDateString()}`,
    }]
}

let store = createStore((state, action) => {
    switch(action.type || state === undefined){
        case 'increment':
            const newArr = {
                id: action.payload, 
                subject: action.payload,
                content: action.payload,
                date: `${new Date().toLocaleDateString()}`
            }
            return {
                board: [...state.board, newArr],
            };
        default :
            return initialState;
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;