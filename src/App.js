import React, { Component } from 'react';
import chat from './components/Chat.js';
import './css/App.css';
class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="mainContainer">
        <div className="chatContainer">
          <chat from="client" to="server"
            messages={this.props.state.messages}
            sendMessage={this.props.sendMessage}
          />
        </div>
        <div className="chatContainer">
          <chat from="server" to="client"
            messages={this.props.state.messages}
            sendMessage={this.props.sendMessage}
          />
        </div>
      </div>
    )
  }
}

export default App;
