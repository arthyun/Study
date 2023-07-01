import { configureStore, createSlice } from '@reduxjs/toolkit';

const first = createSlice({
    name: 'first',
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

const userData = createSlice({
    name: 'userData',
    initialState: [
        {
            name: 'Hyunho',
            phone: '010-7212-****',
            email: 'heun3316@naver.com',
            gender: 'male'
        },
        {
            name: 'Ayoung',
            phone: '010-4707-****',
            email: 'rladkdud@naver.com',
            gender: 'female'
        },
    ],
    reducers: {
        userPost(state, action){
            return [...state, action.payload];
        },
    }
})

//actions 내보내기(사용 함수명으로)
export const { increaseCnt, changeName, changeStatus } = first.actions;
export const { userPost } = userData.actions;

//reducer 목록 셋팅
export default configureStore({
    reducer: {
        first: first.reducer,
        userData: userData.reducer,
    }
});