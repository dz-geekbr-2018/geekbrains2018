import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css';

class JLeftMenu extends React.Component {
  constructor(){
    super();
    this.state = {selected: 1};
    this.doClick = this.doClick.bind(this);
  }
  doClick(el){
    this.setState({selected: el.target.dataset.idx});
  }
  render() {
    var self = this;
    var idx = 0;
    return (
      <div>
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
