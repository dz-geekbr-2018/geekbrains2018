import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css';

class JTopMenu extends React.Component {
  constructor(){
    super();
    this.state = {selected: 1};
    this.doClick = this.doClick.bind(this);
  }
  doClick(el){
    console.log('select ' + el.target.dataset.idx);
    this.setState({selected: el.target.dataset.idx});
  }
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
