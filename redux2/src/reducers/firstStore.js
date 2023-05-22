
const initialState = {
    data: [
        {
            name: 'default',
            cnt: 0,
        }
    ],
    status: 'success'
}

const firstStore = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                data: [
                    {
                        ...state.data[0],
                        cnt: state.data[0].cnt + 1
                    }
                ]
            };
        default:
            return state;
    }
};

export default firstStore;