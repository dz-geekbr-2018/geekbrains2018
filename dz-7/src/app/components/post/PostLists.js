import React from 'react';
import PostItem from './PostItem';

export default class PostLists extends React.Component
{
    render()
    {
        if(!this.props.posts.length){
            return null; //Если данные еще загружаются
        }

        let posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} {...post} />
        });

        return (
            <div>
                <h1>Посты</h1>
                <div className="panel panel-default">
                    {posts}
                </div>

            </div>
        );
    }
}