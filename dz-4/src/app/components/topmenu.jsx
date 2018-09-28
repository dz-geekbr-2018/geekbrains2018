import React from 'react';
import ReactDOM from 'react-dom';
import JMenu from './menu';
import '../styles/app.css';

class JTopMenu extends JMenu {
  render() {
    var self = this;
    var idx = 0;
    return (
      <div className='inline'>
      <ul>{ this.props.items.map(function(m, index){
          idx++;
          return <li className={(self.state.selected == idx)?'selected':''} data-idx={idx} key={index} onClick={self.doClick}>{m}</li>;
          })
        }
      </ul>
      </div>
    );
  }
}

export default JTopMenu;
