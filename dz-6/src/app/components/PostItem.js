import React from 'react';
import {Link} from 'react-router';
import {delPost, editPost} from '../actions/postActions';

const spanRed = {
  color: 'red'
};

export default class PostItem extends React.Component
{
  constructor(props) {
      super(props);

      this.state = {edit: false, body: this.props.body, title: this.props.title};

      this.delPost = this.delPost.bind(this);
      this.editPost = this.editPost.bind(this);
      this.editPostOk = this.editPostOk.bind(this);
      this.editPostCancel = this.editPostCancel.bind(this);
      this.onBodyChanged = this.onBodyChanged.bind(this);
      this.onTitleChanged = this.onTitleChanged.bind(this);
  }

  delPost() {
    if(!confirm('Удалить пост №' + this.props.id + '?')){
      return;
    }
    delPost(this.props.id);
  }

  editPost() {
    this.setState({edit: true});
  }

  editPostOk() {
    this.setState({edit: false});
    editPost({id: this.props.id, body: this.state.body, title: this.state.title});
  }

  editPostCancel() {
    this.setState({edit: false});
  }

  onBodyChanged(e) {
    this.setState({body: e.target.value});
  }

  onTitleChanged(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    <span style={spanRed}>#{this.props.id} </span>
                    {
                      (this.state.edit)?
                      <input type='edit' size='100' value={this.state.title} onChange={this.onTitleChanged}/>:
                      <Link to={`/users/${this.props.userId}`}>{this.props.title}</Link>
                    }
                </h3>
            </div>
            <div className="panel-body">
              {
                (this.state.edit)?
                <div><textarea rows='4' cols='100' value={this.state.body} onChange={this.onBodyChanged}/></div>:
                <div>{this.state.body}</div>
              }
            </div>
            <div>
            {
              (this.state.edit)?
              <div><button className="btn btn-primary" onClick={this.editPostOk}>Ок</button>
              <button className="btn btn-primary" onClick={this.editPostCancel}>Отмена</button></div>
              :
              <div><button className="btn btn-primary" onClick={this.delPost}>Удалить</button>
              <button className="btn btn-primary" onClick={this.editPost}>Редактировать</button></div>
            }
            </div>
        </div>
    );
  }
}
