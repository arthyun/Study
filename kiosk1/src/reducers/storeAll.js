const initialState = {
    test : [{
            subject: 'Kiosk redux test',
        }]
};

const storeAll = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default storeAll;