import React, { Component } from 'react';

export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
      <ul>
      {
        this.props.messages.map(msg => {
          console.log(JSON.stringify(msg));
          return (
            <li key={new Date()+msg}>
              <div className="from">
                {this.props.from}
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
