import React from 'react';
import ReactDOM from 'react-dom';

class JUserName extends React.Component {
  state = {text: 'Zorin Denis'}
  constructor(){
    super();
    this.doClick = this.doClick.bind(this);
  }
  doClick(){
    let dt = 'Current date: ' + new Date();
    this.setState({text: dt});
  }
  render() {
    return (
      <span onClick={this.doClick}>{this.state?this.state.text:''}</span>
    );
  }
}

export default JUserName;
