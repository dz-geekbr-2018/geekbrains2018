import React from 'react';
import {Link} from 'react-router';
import '../styles/app.css';

var cssCardImg = {
  width:'400pt',
  height:'20pt'
};

class JCard extends React.Component {
  constructor(props){
      super(props);

      console.log(this.props);
  }

  render() {
    return (
      <div className='border' >
        <div className='img100-100' style={cssCardImg}/>
        <h3>Page head {this.props.name}</h3>
        <div>{this.props.name}</div>
        {(!this.props.params)?
        <Link to={`/blogs/${this.props.blogId}`}>Детали-></Link>:''
        }
      </div>
    );
  }
}

export default JCard;
