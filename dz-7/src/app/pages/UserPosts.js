import React from 'react';
import {getUserPosts} from '../actions/postActions';
import PostLists from '../components/post/PostLists';
import {connect} from 'react-redux';

class UserPosts extends React.Component {
    componentDidMount()
    {
        console.log('UserPosts: ' + JSON.stringify(this.props));
        //Action
        this.props.dispatch(getUserPosts(this.props.userId));
    }

    render() {
        if(this.props.is_loading){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Посты пользователя</h3>
                <PostLists posts={this.props.posts}/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
    }
}

export default connect(mapStateToProps)(UserPosts);
