import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/app.css';

class JMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {selected: (props && props.selected)?props.selected:1};
    this.doClick = this.doClick.bind(this);
  }
  doClick(el){
    if(!el || !el.target || !el.target.dataset || this.state.selected === el.target.dataset.idx){
      return;
    }
    console.log('select ' + el.target.dataset.idx);
    this.setState({selected: el.target.dataset.idx});

    if(this.props.callback){
      this.props.callback(el);
    }
  }
  render() {
    var self = this;
    var idx = 0;
    return (
      <div className='inline'>
      { this.props.items.map(function(m, index){
          idx++;
          return <span className={(self.state.selected == idx)?'selected':''} data-idx={idx} key={index} onClick={self.doClick}>{m}</span>;
          })
        }
      </div>
    );
  }
}

export default JMenu;
