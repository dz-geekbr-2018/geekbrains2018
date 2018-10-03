import React from 'react';
import {Link} from 'react-router';
import '../styles/app.css';

class JTopMenu extends React.Component {
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
  isActive(href){
      return window.location.pathname === href;
  }
  render() {
    var self = this;
    var idx = 0;
    return (
      <div className='inline'>
      <ul>{ this.props.items.map((m, index)=>{
          idx++;
          return <li className={self.isActive(m.path)?'selected':''} data-idx={idx} key={index} onClick={self.doClick}>
                <Link to={m.path} style={self.isActive(m.path)?{ color: '#fff' }:{ color: '#3b5998' }}>{m.name}</Link>
              </li>;
              })
            }
      </ul>
      </div>
    );
  }
}

export default JTopMenu;
