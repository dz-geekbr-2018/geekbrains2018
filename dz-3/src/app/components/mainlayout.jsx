import React from 'react';
import ReactDOM from 'react-dom';
import JTopMenu from './topmenu';
import JMainPage from './mainpage';
import JLogin from './login';

class JMainLayout extends React.Component {
  render() {
    return (
      <div>
        <JTopMenu items={['Main','Services','About','Contacts']}/>
        <JLogin/>
        <JMainPage/>
      </div>
    );
  }
}

export default JMainLayout;
