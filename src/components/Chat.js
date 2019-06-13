import React, { Component } from 'react';
import MessageList from './MessageList.js';
import Footer from './Footer.js';

export default class Chat extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <MessageList
          messages={this.props.messages}
          from={this.props.from}
          to={this.props.to}
        />
        <Footer
          from={this.props.from}
          to={this.props.to}
          sendMessage={this.props.sendMessage}
        />
      </div>
    )
  }
}
