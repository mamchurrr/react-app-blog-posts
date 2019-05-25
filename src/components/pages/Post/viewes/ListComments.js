import React from 'react';
import Comment from './Comment'
import BtnViewComments from './BtnViewComments'

const ListComments = ({ comments,  addCommentPost  }) => {

    return (

        <div className="list-comments">
            <BtnViewComments />
            <br />
            { addCommentPost.map(comment => <Comment key={comment.id} comment={comment} />) }
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </div>
    )
}

export default ListComments