import React from 'react';
import JCard from './card';

class JBlogPage extends React.Component {
  constructor(props){
    super(props);

    console.log(this.props.children);

    this.state = {
      data: [
        {name:'Блог 1', id:1, details:{userid:1}},
        {name:'Блог 2', id:2, details:{userid:2}},
        {name:'Блог 3', id:3, details:{userid:3}}
      ]
    };
  }

  render() {
    var item = this.state.data.map((m, index) => {
        return <JCard key={index} blogId={m.id} title={m.name}/>
    });
    return (
      <div className='left'>
        {(!this.props.children) ? item : (this.props.children)}
      </div>
    );
  }
}

export default JBlogPage;
