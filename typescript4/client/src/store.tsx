import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// 세션에 저장되게..
const { persistAtom } = recoilPersist({
  key: "recoilPersist",
  storage: sessionStorage,
});

export const loginStore = atom({
  key: "loginStore",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 로그인 확인용
export const isloginStore = atom({
  key: "isloginStore",
  default: false,
});
