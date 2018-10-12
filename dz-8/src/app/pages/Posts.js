import React from 'react';
import {addPost, getPosts, deletePost} from '../actions/postActions';
import PostLists from '../components/post/PostLists';
import {connect} from 'react-redux';

import FormPost from '../components/post/AddPost';

class Posts extends React.Component {
    componentDidMount()
    {
        //Action
        this.props.dispatch(getPosts());

        //Добавление
        $('body').on('submit', (event) => {
            event.preventDefault();

            this.props.dispatch(addPost());
            // reload
            this.props.dispatch(getPosts());
        });
    }

    render() {
        if(this.props.is_loading){
            return <div>Данные загружаются...</div>
        }

        return (
            <div>
                <FormPost/>
                <PostLists posts={this.props.posts}/>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading,
        forceReload: store.posts.forceReload
    }
}

export default connect(mapStateToProps)(Posts);
