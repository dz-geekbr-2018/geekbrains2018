import React from 'react';
import JCard from './card';
//import JHomePage from './homepage';
//import JBlogPage from './blogpage';

class JMainHeader extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <h1>{this.props.name}</h1>
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
      <div className='left'>
        <JCard title={this.state.body}/>
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
  render() {
    return (
      <div>
      <JMainHeader name={this.props.header}/>
      <JMainFooter/>
      </div>
    );
  }
}

export default JMainPage;
