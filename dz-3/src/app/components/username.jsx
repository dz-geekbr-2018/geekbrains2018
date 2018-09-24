import React from 'react';
import ReactDOM from 'react-dom';

const fio = 'Zorin Denis';

class JUserName extends React.Component {
  state = {text: fio, mode: 1}
  constructor(){
    super();
    this.doClick = this.doClick.bind(this);
  }
  doClick(){
    let dt = 'Current date: ' + new Date();
    this.setState({text: (this.state.mode == 1)?dt:fio, mode: (this.state.mode == 1)?0:1});
  }
  render() {
    return (
      <span onClick={this.doClick}>{this.state?this.state.text:''}</span>
    );
  }
}

export default JUserName;
