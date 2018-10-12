import React from 'react';
import {connect} from 'react-redux';

import {addPost,getPosts} from '../../actions/postActions';

class AddPost extends React.Component {
  constructor()
  {
      super(...arguments);

      //bind
      this.doClick = this.doClick.bind(this);
  }

  doClick(e){
    this.props.dispatch(addPost('New text ' + Math.random()));
    this.props.dispatch(getPosts());
  }

  render(){
      return(
          <div>
              <h2>Форма для добавления поста</h2>
              <input type="button" className="btn btn-primary" onClick={this.doClick} value='Добавить'/>
          </div>
      );
  }
}

function mapStateToProps(store) {
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading
    }
}

export default connect(mapStateToProps)(AddPost);
