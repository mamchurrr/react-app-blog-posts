import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../../../utils/formatDate'

const Post = ({ post }) => {
    const {
        title,
        id,
        date,
        description
    } = post;

    const datePost = date ? formatDate(date) : "without date";

    return (

        <div className="post">
            <Link to={`/post/${id}`}>
                <div className="wrap">
                    <h2> {title} </h2>
                    <h3>
                        {datePost}
                    </h3>
                    <h4> {description} </h4>
                </div>
            </Link>
        </div>
    )
}

export default Post