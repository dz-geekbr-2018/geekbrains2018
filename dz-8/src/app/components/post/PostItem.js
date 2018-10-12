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
                      {this.props._id}
                    </h3>
                </div>
                <div className="panel-body">
                    <div>{this.props.text}</div>
                    <div>
                        <a href="#" className="post_del" data-id={this.props.id}>Удалить пост</a>
                    </div>
                </div>
            </div>
        );
    }
}
