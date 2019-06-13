import React, { Component } from 'react';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  getRandomNumber = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return new Date().getTime()+"-"+s4()+s4()+"-"+s4();
  }

  render(){
    return(
      <div>
      <ul>
      {
        this.props.messages.map(msg => {
          return (
            <li key={this.getRandomNumber()}>
              <div className="from">
                {msg.from}
              </div>
              <div className="message">
                {msg.message}
              </div>
            </li>
          )
        })
      }
      </ul>
      </div>
    )
  }
}
