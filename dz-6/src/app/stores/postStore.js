import {
   ADD_POST,
   GET_POSTS, DEL_POST, EDIT_POST
} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter{
    constructor()
    {
        super(...arguments);

        //Для постов
        this.posts = [];

        //bind
        this.getPostsEnd = this.getPostsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.delPost = this.delPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    getPostsEnd(posts)
    {
        this.posts = posts;
        this.change(); //Для уведомления подписанных компонентов
    }

    change()
    {
        this.emit('change', this.posts);
    }

    addPost(post)
    {
        var max = this.posts.reduce((p, v) =>{return ( p.id > v.id ? p : v )});
        post.id = max.id + 1;
        this.posts.splice( 0, 0, post );
        //this.posts.push(post);
        this.change();
    }

    delPost(id)
    {
      var idx = this.posts.findIndex((item)=>{return item.id == id});
      this.posts.splice(idx, 1);

      this.change();
    }

    editPost(data)
    {
      var idx = this.posts.findIndex((item)=>{return item.id == data.id});

      this.posts[idx].body = data.body;
      this.posts[idx].title = data.title;

      this.change();
    }

    handleActions(action){
        var handler = undefined;
        switch (action.type) {
            case ADD_POST: {
                handler = this.addPost;
                break;
            }
            case GET_POSTS: {
                handler = this.getPostsEnd;
                break;
            }
            case DEL_POST: {
                handler = this.delPost;
                break;
            }
            case EDIT_POST: {
                handler = this.editPost;
                break;
            }
        }
        if(handler){
          handler(action.payload);
        }
    }
}

const store = new postStore;
dispatcher.register(store.handleActions);
export default store;
