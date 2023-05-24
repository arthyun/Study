import { configureStore, createSlice } from '@reduxjs/toolkit';

const first = createSlice({
    name: 'first',
    initialState: {
        name: 'Sohn',
        boolean: false,
    },
    reducers: {
        changeName(state, action){
            return {...state, ...action.payload};
        },
        changeStatus(state){
            return { ...state, boolean: !state.boolean };
        },
    }
});

//actions 내보내기(사용 함수명으로)
export const { changeName, changeStatus } = first.actions;

//reducer 목록 셋팅
export default configureStore({
    reducer: {
        first: first.reducer,
    }
});