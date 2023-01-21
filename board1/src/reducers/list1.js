const initialState = {
    board : [
        {
            id: Date.now(),
            subject: '1번째 게시물 제목입니다.',
            content: '1번째 게시물 내용입니다.',
            date: `${new Date().toLocaleDateString()}`,
        },
        {
            id: Date.now(),
            subject: '2번째 게시물 제목입니다.',
            content: '2번째 게시물 내용입니다.',
            date: `${new Date().toLocaleDateString()}`,
        },
        {
            id: Date.now(),
            subject: '3번째 게시물 제목입니다.',
            content: '3번째 게시물 내용입니다.',
            date: `${new Date().toLocaleDateString()}`,
        },
    ]
};

const test1 = (state = initialState, action) => {
    switch(action.type){
        case 'increment':
            const newArr = {
                id: action.payload.id, 
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