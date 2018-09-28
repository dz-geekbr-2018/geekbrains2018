import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class JLogin extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
    this.doClick = this.doClick.bind(this);
    this.doClose = this.doClose.bind(this);
  }

  doClick() {
    this.setState({ show: true });
  }

  doClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className='login inline' >
        <Button onClick={this.doClick}>Login</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User login</Modal.Title>
          </Modal.Header>
           <Modal.Body>
           <FormGroup controlId="username" bsSize="large">
             <ControlLabel>Name</ControlLabel>
             <FormControl
               autoFocus
               placeholder='Enter your login'
               value={this.state.username}
             />
           </FormGroup>
           <FormGroup controlId="pwd" bsSize="large">
             <ControlLabel>Password</ControlLabel>
             <FormControl
                placeholder='Enter the password'
                value={this.state.pwd}
                type='password'
             />
           </FormGroup>
           </Modal.Body>
           <Modal.Footer>
            <Button onClick={this.doClose}>Ok</Button>
            <Button onClick={this.doClose}>Cancel</Button>
           </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JLogin;
