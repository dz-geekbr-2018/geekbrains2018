import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import '../styles/app.css';

var cssCardImg = {
  width:'400pt',
  height:'20pt'
};

class JCard extends React.Component {

  render() {
    return (
      <div className='inline border' >
        <div className='img100-100' style={cssCardImg}/>
        <h3>Page head {this.props.title}</h3>
        <div>{this.props.title}</div>
        <Button>Read more</Button>
      </div>
    );
  }
}

export default JCard;
