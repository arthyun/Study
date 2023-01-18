let count = 1;

const initialState = {
    board : [{
        id: count,
        subject: '첫번째 게시물 제목입니다.',
        content: '첫번째 게시물 내용입니다.',
        date: `${new Date().toLocaleDateString()}`,
    }]
};

const test1 = (state = initialState, action) => {
    switch(action.type){
        case 'increment':
            const newArr = {
                id: count + action.payload.id, 
                subject: action.payload.subject,
                content: action.payload.content,
                date: `${new Date().toLocaleDateString()}`
            }
            return {
                board: [...state.board, newArr],
            };
        default :
            return state;
    }
};

export default test1;