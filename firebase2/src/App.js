//Default
import React from 'react';
import './App.css';

//Components
import Content from './components/content';
import Auth from './components/auth';

//Firebase Setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBE_PSXEcS9Su_1yil9220P-ItRd-EzAvg",
  authDomain: "test2-cb880.firebaseapp.com",
  projectId: "test2-cb880",
  storageBucket: "test2-cb880.appspot.com",
  messagingSenderId: "271605980404",
  appId: "1:271605980404:web:f9a2d29482c82d04de52a1",
  measurementId: "G-79V7QFFQH3"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
        {/* {user ? <Content /> : <Auth />} */}
        <Auth />
    </div>
  );
}

export default App;
