import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css';

class JLeftMenu extends React.Component {
  state = {selected: 1}

  constructor(){
    super();
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
        {this.props.items.map(function(m, index){
          idx++;
          var cn = (self.state.selected == idx)?'left-menu-item selected':'left-menu-item';
          return <div className={cn} data-idx={idx} key={index} onClick={self.doClick}>{m}</div>;
          })
        }
      </div>
    );
  }
}

export default JLeftMenu;
