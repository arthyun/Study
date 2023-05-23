import { configureStore, createSlice } from '@reduxjs/toolkit';

const first = createSlice({
    name: 'first',
    initialState: false,
    reducers: {
        changeState(state){
            return !state;
        },
    }
});

//actions 내보내기(사용 함수명으로)
export const { changeState } = first.actions;

//reducer 목록 셋팅
export default configureStore({
    reducer: {
        first: first.reducer,
    }
});