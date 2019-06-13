import { Server } from 'mock-socket';
import {getMessageObject} from '../redux/Reducer.js'

export default class ChatServer{
  constructor(url){
    this.mockServer = new Server(url);
    this.initListners();
    this.sockets = [];
  }

  initListners = () => {
    this.mockServer.on('connection', socket => {
      this.sockets.push(socket);
      socket.on('message', data => {        
        this.onReceiptCallBack(data.message,data.from,data.time);
      });
    });
  }

  onReceiptCallBack = () => {}

  sendMessage = (message,from,time) => {
    var msg = getMessageObject(message,from,time);
    this.sockets.map(socket => {
      socket.send(JSON.stringify(msg));
    });
  }
}
