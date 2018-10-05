import React from 'react';
import PostStore from '../stores/postStore';
import {addPost, getPosts} from '../actions/postActions';
import PostLists from '../components/PostLists';

export default class Posts extends React.Component {
    constructor()
    {
        super(...arguments);

        this.state = {
            posts: []
        };

        //bind
        this.newPost = this.newPost.bind(this);
        this.onPostChange = this.onPostChange.bind(this);
    }

    newPost()
    {
        let body = 'Текст вновь добавленного поста';
        let userId = 1;
        let title = 'Мой пост';

        //Action
        addPost(title, userId, body);
    }

    onPostChange(posts){
        this.setState({posts: posts, key: Math.random()});
    }

    componentDidMount()
    {
        //Action
        getPosts();
    }

    componentWillMount()
    {
        PostStore.on('change', this.onPostChange);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
                <PostLists key={this.state.key} posts={this.state.posts}/>
            </div>
        );
    }
}
