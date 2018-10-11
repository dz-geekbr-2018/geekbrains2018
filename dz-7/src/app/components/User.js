import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {setUserId} from '../actions/postActions';

class User extends React.Component
{
  constructor()
  {
      super(...arguments);

      //bind
      this.selectUser = this.selectUser.bind(this);
  }

  selectUser()
  {
      this.props.dispatch(setUserId(this.props.id));
  }

  render()
  {
      return (
          <div className="panel panel-default">
              <div className="panel-heading">
                  <h3 className="panel-title">
                      <Link to={`/users/${this.props.id}`}>
                      {this.props.username}
                      </Link>
                      </h3>
              </div>
              <div>
                <button className="btn btn-primary" onClick={this.selectUser}>Посты</button>
              </div>
              <div className="panel-body">
                  <p>{this.props.name}</p>
                  <p>{this.props.email}</p>
                  <p>{this.props.phone}</p>
                  <p>{this.props.website}</p>
              </div>
          </div>
      );
  }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
        userId: store.posts.userId,
    }
}

export default connect(mapStateToProps)(User);
