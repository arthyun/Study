import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import firebase from './firebase';
// console.log(firebase);

//Redux 최초 연결
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import nwitterRD from './reducers/nwitterRD';

const store = createStore(rootReducer, composeWithDevTools());

// console.log(store.getState().nwitterRD.operator);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);