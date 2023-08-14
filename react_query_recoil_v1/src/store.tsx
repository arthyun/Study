import { atom, selector, selectorFamily } from 'recoil';

// 컴포넌트에서 아톰을 사용하기 위해 export를 사용해 내보냅니다.
export const countState = atom({
  key: 'count',
  default: 0
});
export const nameState = atom({
  key: 'name',
  default: 'hyunho'
});

//selector를 활용하여 get과 set 가능
export const countStateSelector = selector({
  key: 'countSelector1',
  get: ({ get }) => {
    const count = get(countState) + 'px';
    return count;
  }
});
// export const countWithUnitState = selector({
//   key: 'countSelector2',
//   get: ({ get }) => {
//     const count = get(countState);
//     return count;
//   },
//   set: ({ set }, newValue) => {
//     set(countState, newValue);
//   }
// });

//매개변수를 주고자 할 때
export const selectedCountState = selectorFamily({
  key: 'countFamily',
  get:
    (num: number) =>
    ({ get }) => {
      const countInitial = get(countState);
      return countInitial + num;
    }
});

//배열 처리 테스트
//타입 지정
interface GetList {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export const getList = atom<GetList[]>({
  key: 'getList',
  default: []
});

//getList 변형
export const getChangeList = selector({
  key: 'getChangeList',
  get: ({ get }) => {
    const initialList = get(getList);
    return initialList;
  },
  set: ({ set }, newValue) => {
    set(getList, newValue);
  }
});
