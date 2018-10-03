import React from 'react';
import {Link} from 'react-router';

//import JMainPage from './mainpage';
import JTopMenu from './topmenu';

class JMainHeader extends React.Component {
  render() {
    return (
      <div className='main-header'>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

class JMainFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <h1>Static footer</h1>
      </div>
    );
  }
}

class JMainLayout extends React.Component {
  constructor(props){
    super(props);
    this.state = {mainId:0, bodyId:0, header:'Main',content:'Content 1',
      mainMenuNames: [],
      leftMenuNames: [],
      data: [
        {name:'Главная', path:'/', menu:['Главная','Контакты','Main Content 3']},
        {name:'Блог', path:'/blogs', menu:['Все блоги']},
        {name:'Комментарии', path:'/comments', menu:['Все комментарии']},
        {name:'Пользователи', path:'/users', menu:['Все пользователи']}
      ]
    };
  }

  componentWillMount(){
    var m = this.state.data.map((m) => { return {'name': m.name, 'path': m.path}});
    this.setState({mainMenuNames:m});
  }

  render() {
    var href = window.location.pathname;
    var title = this.state.data.map((m)=>{if(m.path === href)return m.name});
    return (
      <div>
        <JTopMenu items={this.state.mainMenuNames} callback={this.topMenuCallback}/>
        <JMainHeader name={title}/>
        <div className="col-xs-12">
            {this.props.children}
        </div>
        <JMainFooter/>
      </div>
    );
  }
}

export default JMainLayout;
