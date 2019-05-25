import React from 'react';
import Post from './Post'

const ListPosts = ({posts}) => (
    <div className="list-posts">
        { posts.map(p => <Post key={p.id} post = {p}/>) }
    </div>
)

export default ListPosts