import React from 'react';
import {getUserPosts} from '../actions/postActions';
import PostLists from '../components/post/PostLists';
import {connect} from 'react-redux';

class UserPosts extends React.Component {
    componentWillMount()
    {
        //console.log('UserPosts: ' + this.props.userId);
        //Action
        //this.props.dispatch(getUserPosts(this.props.userId));
    }

    componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps: ' + nextProps.userId);
      if(this.props.userId !== nextProps.userId){
        this.props.dispatch(getUserPosts(nextProps.userId));
      }
    }

    render() {
        if(this.props.is_loading){
            return <div>Loading...</div>
        }
        if(this.props.userId == 0){
          return <div>Не выбранно</div>
        }

        return (
            <div>
                <h3>Посты пользователя {this.props.userId}</h3>
                <PostLists posts={this.props.posts}/>
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

export default connect(mapStateToProps)(UserPosts);
