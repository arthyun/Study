import { configureStore, createSlice } from "@reduxjs/toolkit";

type TypeSlice = {
    name: string,
    initialState: {
        cnt: number,
        name: string,
        boolean: boolean,
    }
    reducers: <T>(state: T[], action: T[]) => <T>
}

const reduxTest : TypeSlice = createSlice({
    name: 'reduxTest',
    initialState: {
        cnt: 0,
        name: 'Sohn',
        boolean: false,
    },
    reducers: {
        increaseCnt(state, action){
            return {...state, cnt: state.cnt + action.payload};
        },
        changeName(state, action){
            return {...state, ...action.payload};
        },
        changeStatus(state){
            return { ...state, boolean: !state.boolean };
        },
    }
});


//actions 내보내기(사용 함수명으로)
export const { increaseCnt, changeName, changeStatus } = reduxTest.actions;

//reducer 목록 셋팅
export default configureStore({
    reducer: {
        reduxTest: reduxTest.reducer,
    }
});