import { WebSocket } from 'mock-socket';
import {getMessageObject} from '../redux/Reducer.js'

export default class ChatClient{
  constructor(url){
    this.mockConnection = new WebSocket(url);
    this.initListners();
  }

  initListners = () => {
    this.mockConnection.onmessage = (event) => {
      //this.messages.push(event.data);
      var data = event.data;
      console.log("Received message @ client");
      console.log("data "+data);
      console.log("event "+JSON.stringify(event));
      //console.log("from "+from);
      this.onReceiptCallBack(data.message,data.from,data.time);
    };

    /*this.mockConnection.on('message', data => {
      this.onReceiptCallBack(data.message,data.from,data.time);
    });*/
  }

  onReceiptCallBack = () => {}

  sendMessage = (message,from,time) => {
    var msg = getMessageObject(message,from,time);
    this.mockConnection.send('message',msg);
  }
}
