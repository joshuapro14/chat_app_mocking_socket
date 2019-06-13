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
          return (
            <li>from : {this.prosp.from}</li>
            <li>{msg}</li>
          )
        });
      }
      </ul>
      </div>
    )
  }
}
