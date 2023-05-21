
const initialState = {
    data: [
        {
            name: 'default',
        }
    ],
    status: 'success'
}

const firstStore = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }
};

export default firstStore;