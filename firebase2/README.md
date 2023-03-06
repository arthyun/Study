# React + Firebase로 Chat App 만들기

* 쉬운 방법
1. npx create-react-app 폴더명

2. npm install firebase react-firebase-hooks

3. import 할거 해주고 auth와 firestore 잡아주기
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/firestore';
    import 'firebase/compat/auth';
    import { useAuthState } from 'react-firebase-hooks/auth';
    import { useCollectionData } from 'react-firebase-hooks/firestore';

    firebase.initializeApp({
        //받은 초기값 입력
    });

    const auth = firebase.auth();
    const firestore = firebase.firestore();

4. 이상해..