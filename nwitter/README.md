# React + Firebase로 Nwitter App 제작

1. npx create-react-app nwitter

2. npm install firebase@9.6.1
 - Firebase V9 업데이트 되면서. 이슈가 생겼습니다. 이에 코드의 큰 변경 없이 버전 9.0 을 사용하기 위해서. Firebase 의 'compat' 호환 버전 사용을 권장합니다.
 - import firebase from "firebase/compat/app";
 - import "firebase/compat/auth";
 - import "firebase/compat/firestore";
 - import "firebase/compat/storage";
 
3. npm install react-router-dom@5.3.0 -> 구버전이 좋다면!