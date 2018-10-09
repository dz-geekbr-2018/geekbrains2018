import React from 'react';
import {Link} from 'react-router';

export default class PostItem extends React.Component
{
    render()
    {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <Link to={`/users/${this.props.userId}`}>
                            {this.props.title}
                        </Link>
                    </h3>
                </div>
                <div className="panel-body">
                    <div>{this.props.body}</div>
                    <div>
                        <a href="#" className="post_del" data-id={this.props.id}>Удалить пост</a>
                    </div>
                </div>
            </div>
        );
    }
}