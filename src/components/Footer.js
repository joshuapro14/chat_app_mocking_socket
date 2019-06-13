import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.readInput = this.readInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  onKeyDown = (e) => {
    if (e.which === 13){
      this.sendMessage();
    }
  }

  sendMessage = () => {
    var text = this.state.value;
    if (text !== '') {
      this.props.sendMessage(text,this.props.from);
      this.setState({value: ''});
    }
  }

  readInput = (event) => {
    this.setState({value: event.target.value});
  }

  render(){
    return(
      <div>
      {this.props.from}
          <div className="inputBox">
            <input className="mytext" placeholder="Type a message" value={this.state.value}
              onKeyDown={this.onKeyDown} onChange={this.readInput}
            />
          </div>
          <div style={{padding:10+'px', marginRight:'5%'}}>
            <button onClick={this.sendMessage}>Send</button>
          </div>

      </div>
    )
  }

}
