import { WebSocket } from 'mock-socket';
import {getMessageObject} from '../redux/Reducer.js'

export default class ChatClient{
  constructor(url){
    this.mockConnection = new WebSocket(url);
    this.initListners();
  }

  initListners = () => {
    this.mockConnection.on('message', data => {
      this.onReceiptCallBack(data.message,data.from,data.time);
    }
  }

  onReceiptCallBack = () => {}

  sendMessage = (message,from,time) => {
    var msg = getMessageObject(message,from,time);
    this.mockConnection.send('message',msg);
  }
}
