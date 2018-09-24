import React from 'react';
import ReactDOM from 'react-dom';
import JTopMenu from './topmenu';
import JLeftMenu from './leftmenu';
import JMainPage from './mainpage';
import JLogin from './login';

class JMainLayout extends React.Component {
  render() {
    return (
      <div>
        <div className='inline'>
          <JLeftMenu items={['Left menu 1','Left menu 2','Left menu 3','Left menu 4']}/>
        </div>
        <div className='inline top'>
          <JTopMenu items={['Main','Services','About','Contacts']}/>
          <JLogin/>
          <JMainPage/>
        </div>
      </div>
    );
  }
}

export default JMainLayout;
