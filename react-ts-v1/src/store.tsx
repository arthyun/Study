import { configureStore, createSlice } from "@reduxjs/toolkit";

interface ReduxInitialState {
    cnt: number,
    name: string,
    boolean: boolean,
}

const initialState : ReduxInitialState = {
    cnt: 0,
    name: 'Sohn',
    boolean: false,
};

const reduxTest = createSlice({
    name: 'reduxTest',
    initialState,
    reducers: {
        increaseCnt(state, action:{payload: number}){
            return {...state, cnt: state.cnt + action.payload};
        },
        changeName(state, action:{payload:[]}){
            return {...state, ...action.payload};
        },
        changeStatus(state){
            return { ...state, boolean: !state.boolean };
        },
    }
});

//actions 내보내기(사용 함수명으로)
export const { increaseCnt, changeName, changeStatus } = reduxTest.actions;

const reduxApp = configureStore({
    reducer: {
        reduxTest: reduxTest.reducer,
    }
});
//reducer 목록 셋팅
export default reduxApp;