import React from 'react';
import ReactDOM from 'react-dom';
import JMenu from './menu';
import '../styles/app.css';

var cssDivRight = {
  width: '100%',
  backgroundColor:'#fb5998'
};

class JLeftMenu extends JMenu {
  render() {
    var self = this;
    var idx = 0;
    console.log('JLeftMenu.selected=' + self.state.selected);
    return (
        <div className='inline'>
          <div className='left-menu-top'>
          </div>
          {this.props.items.map(function(m, index){
            idx++;
            var cn = 'left-menu-item';
            cn = (self.state.selected == idx)?cn + ' selected':cn;
            return <div className={cn} data-idx={idx} key={index} onClick={self.doClick}>{m}</div>;
            })
          }
        </div>
    );
  }
}

export default JLeftMenu;
