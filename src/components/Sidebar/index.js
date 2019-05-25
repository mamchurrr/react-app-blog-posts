import React from 'react';
import { connect } from 'react-redux';
import AddPostForm from './viewes/AddPostForm'
import AddCommentPostForm from './viewes/AddCommentPostForm'

import './style.scss'

const Sidebar = ({blog}) => {
    const form = blog ? <AddPostForm /> : <AddCommentPostForm />
    return (
        <div id="sidebar">
            <div className="sidebar__wrap">
                <h1>Sidebar</h1>
                { form }
                
            </div>
        </div>
    )
    
}
const mapStateToProps = (state, ownProps) => ({
    ownPropsSidebar: ownProps,
});
export default connect(mapStateToProps, null)(Sidebar);
