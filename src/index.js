import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import {initialState, redFn} from './redux/Reducer.js'
import ChatServer from './components/ChatServer.js';
import ChatClient from './components/ChatClient.js';

const fakeURL = 'ws://localhost:8080';
const store = createStore(redFn, newInitState);
const chatServer = new ChatServer(fakeURL);
const chatClient = new ChatClient(fakeURL);

const onReceiptCallBack = (message,from,time) => {
  store.dispatch({
    type: 'MESSAGE_RECEIVED', message: message,
    from: from, time: time
  });
}

chatServer.onReceiptCallBack = onReceiptCallBack;
chatClient.onReceiptCallBack = onReceiptCallBack;

const handleOutgoing = (message,from) => {
  let sendTo = from == "server" ? chatClient : chatServer;
  sendTo.sendMessage(message,from,new Date().getTime());
}

const render = () => {
  var state = store.getState();
    ReactDOM.render(
        <App state={state}
          sendMessage={handleOutgoing}
        />, document.getElementById('root')
    );
}

store.subscribe(render);
render();
