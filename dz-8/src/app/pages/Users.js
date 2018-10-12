import React from 'react';
import UsersList from '../components/UsersList';
import UserPosts from './UserPosts';

const inline = {
  float: 'left',
  width: '400pt'
};

export default class Users extends React.Component {
  render() {
      return (
          <div>
              {
                  (!this.props.children) ?
                      (<div>
                        <div style={inline}><UsersList/></div>
                        <div style={inline}><UserPosts/></div>
                        </div>)
                      :
                      (this.props.children)
              }
          </div>
      );
  }
}
