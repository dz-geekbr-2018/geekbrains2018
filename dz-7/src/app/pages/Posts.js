import React from 'react';
import {addPost, getPosts, deletePost} from '../actions/postActions';
import PostLists from '../components/post/PostLists';
import {connect} from 'react-redux';

import FormPost from '../components/post/AddPost';

import $ from 'jquery';

class Posts extends React.Component {
    componentDidMount()
    {
        //Action
        this.props.dispatch(getPosts());

        //Добавление
        $('body').on('submit', (event) => {
            event.preventDefault();

            //Данные
            let $userId = $('#idUser');
            let $postTitle = $('#postTitle');
            let $postBody = $('#postBody');

            let posts = addPost($postTitle.val(), $userId.val(), $postBody.val());
            this.props.dispatch(posts);

            $userId.val('');
            $postTitle.val('');
            $postBody.val('');
        });

        //Удаление
        $('body').on('click', 'a.post_del', (event) => {
            event.preventDefault();
            let idPost = $(event.currentTarget).attr('data-id');
            this.props.dispatch(deletePost(idPost));
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
    }
}

export default connect(mapStateToProps)(Posts);