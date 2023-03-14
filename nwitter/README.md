# React + Firebase로 Nwitter App 제작

1. npx create-react-app nwitter

2. npm install firebase@9.6.1
 - Firebase V9 업데이트 되면서. 이슈가 생겼습니다. 이에 코드의 큰 변경 없이 버전 9.0 을 사용하기 위해서. Firebase 의 'compat' 호환 버전 사용을 권장합니다.
 - import { initializeApp } from 'firebase/app';
 - import { getAuth } from 'firebase/auth';
 - import { getFirestore } from 'firebase/firestore';
 
4. Firebase SDK 추가하기
 - src에 firebase.js 생성하기
 - Firebase 페이지에서 웹 추가 후 SDK값 받아오기(config/initializeApp)
 - firebase.js에 해당 내용 추가해주기
 - 가장 상단에 firebase/app을 import 해주기(작성된 firebase.js 파일 확인)

5. index.js에서 firebase.js import해서 연결이 잘 되었는지 콘솔에 찍어보기
 - import firebase from 'firebase.js';
 - console.log(firebase);

6. .env파일 생성 후 SDK값을 변수로 지정하기(값 은닉)
 - React에서 사용되기 때문에 변수명 앞에 REACT_APP_를 추가해야한다.
 - '=' 양옆에 띄어쓰기 금지
 - .gitignore에 .env 추가

7. 각 페이지에서 DB에 접근하려면* - v9 이상 기준
 - import { addDoc, getDocs, collection, onSnapshot, query, orderBy } from 'firebase/firestore';
 - const data1 = await addDoc(collection(db, "콜렉션명"), { 전달될 값 });
 - const data2 = await getDocs(collection(db, "콜렉션명"));
  -> forEach문과 data()로 해당 DB 배열값 출력하기
 - onSnapshot, query는 해당 DB에 변화가 있을때 실행될 콜백을 가진다.
 - orderBy는 시간순 정렬을 하기위한 메소드이다.

* npm install react-router-dom@5.3.0 -> 구버전이 좋다면! *