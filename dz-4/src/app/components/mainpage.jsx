import React from 'react';
import ReactDOM from 'react-dom';

class JMainHeader extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <h1>Header {this.props.name}</h1>
      </div>
    );
  }
}

class JMainContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {body:''};
    this.loadData = this.loadData.bind(this);
  }
  componentDidMount(){
    console.log('JMainContent.componentDidMount:props.bodyId=' + this.props.bodyId);
    this.loadData(this.props.bodyId);
  }
  loadData(id){
    if(!this.props.data){
      return;
    }
    this.setState({body: this.props.data[id]});
  }
  render() {
    return (
      <div className='center'>
        <span>Loaded page content: {this.state.body}</span>
      </div>
    );
  }
}

class JMainFooter extends React.Component {
  render() {
    return (
      <div className='main-footer'>
        <h1>Static footer</h1>
      </div>
    );
  }
}

class JMainPage extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('JMainPage.componentWillMount:props.bodyId=' + this.props.bodyId);
  }
  render() {
    return (
      <div>
      <JMainHeader name={this.props.header}/>
      <JMainContent name={this.props.bodyId} data={this.props.data} bodyId={this.props.bodyId}/>
      <JMainFooter/>
      </div>
    );
  }
}

export default JMainPage;
