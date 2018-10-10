import React from 'react';
import UsersList from '../components/UsersList';
import UserPosts from './UserPosts';

export default class Users extends React.Component {
  constructor(props)
  {
      super(props);

      this.state = {
          userId: undefined
      };
  }

  render() {
      return (
          <div>
              {
                  (!this.props.children) ?
                      (<div><UsersList/><UserPosts/></div>)
                      :
                      (this.props.children)
              }
          </div>
      );
  }
}
