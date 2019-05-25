import React from 'react';

const Comment = ({ comment }) => {
    const {
        body
    } = comment;

    return (

        <div className="comment">
                <p> { body } </p>
        </div>
    )
}

export default Comment