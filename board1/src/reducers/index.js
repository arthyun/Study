/** root reducer */
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import list1 from "./list1";

//persistConfig
const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    // list1 reducer만 localstorage에 저장합니다.
    whitelist: ["list1"]
    // blacklist -> 그것만 제외합니다.
}

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드입니다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({
    list1
});

export default persistReducer(persistConfig, rootReducer);