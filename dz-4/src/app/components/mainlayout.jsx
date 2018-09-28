import React from 'react';
import ReactDOM from 'react-dom';
import JTopMenu from './topmenu';
import JLeftMenu from './leftmenu';
import JMainPage from './mainpage';
import JLogin from './login';

class JMainLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {mainId:0, bodyId:0, header:'Main',content:'Content 1',
      mainMenuNames: [],
      leftMenuNames: [],
      data: [
        {name:'Main', menu:['Main Content 1','Main Content 2','Main Content 3','Main Content 4','Main Content 5']},
        {name:'Services', menu:['Services Content 1','Services Content 2','Services Content 3']},
        {name:'About', menu:['About Content 1','About Content 2','About Content 3','About Content 4']},
        {name:'Contacts', menu:['Contacts Content 1','Contacts Content 2']}
      ],
    };

    this.topMenuCallback = this.topMenuCallback.bind(this);
    this.leftMenuCallback = this.leftMenuCallback.bind(this);
    this.loadMainContent = this.loadMainContent.bind(this);
    this.loadMainHeader = this.loadMainHeader.bind(this);
  }

  componentWillMount(){
    var m = this.state.data.map(function(m){return m.name});
    this.setState({mainMenuNames:m});

  }

  topMenuCallback(e){
    if(!e || !e.target){
      return;
    }
    var id = e.target.dataset.idx - 1;
    var v = this.loadMainHeader(id);
    this.setState({mainId: id, bodyId: 0, header: v, key: Math.random(), key2: Math.random()});
  }

  leftMenuCallback(e){
    if(!e || !e.target){
      return;
    }
    var id = e.target.dataset.idx - 1;
    this.setState({bodyId: id, key2: Math.random()});
  }

  loadMainHeader(id){
    return this.state.data[id].name;
  }

  loadMainContent(id){
    return this.state.leftMenuNames[this.state.mainId].menu[id];
  }

  render() {
    return (
      <div>
        <div className='inline'>
          <JLeftMenu key={this.state.key} items={this.state.data[this.state.mainId].menu} selected={this.state.bodyId} callback={this.leftMenuCallback}/>
        </div>
        <div className='inline top'>
          <JTopMenu items={this.state.mainMenuNames} callback={this.topMenuCallback}/>
          <JLogin/>
          <JMainPage key={this.state.key2} header={this.state.header} bodyId={this.state.bodyId} data={this.state.data[this.state.mainId].menu}/>
        </div>
      </div>
    );
  }
}

export default JMainLayout;
