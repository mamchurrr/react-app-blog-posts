import React from 'react';
import AddPostForm from './viewes/AddPostForm'
import AddCommentPostForm from './viewes/AddCommentPostForm'

import './style.scss'

const Sidebar = () => {
    return (
        <div id="sidebar">
            <div className="sidebar__wrap">
                <h1>Sidebar</h1>
                <AddPostForm />
                <AddCommentPostForm />
            </div>
        </div>
    )
}

export default Sidebar