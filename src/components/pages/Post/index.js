import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPostIdActionType } from './actions'
import { getPost } from './selectors';
import Sidebar from '../../Sidebar'
import ListComments from './viewes/ListComments'


import './style.scss';

class Post extends Component {
    componentDidMount() {
        this.props.addPostIdActionType(this.props.getPost.id)
    }

    render() {
        const {
            getPost,
        } = this.props;

        const {
            id,
            title,
            body,
        } = getPost;


        return (
            <div id="post" >
                <div className="container">
                    <div className="page page__with-sidebar">
                        <div className="page__wrap">
                            <h1>Post #{id}. {title} </h1>
                            <p> {body} </p>
                            <ListComments 
                                comments={ this.props.commentsPost }
                                addCommentPost={ this.props.addCommentPost }/>
                        </div>
                        
                    </div>
                    <Sidebar blog={false}/>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => ({
    getPost: getPost(state, ownProps),
    addCommentPost: state.sidebar.commentPost,
    commentsPost: state.post.commentsPost
});
export default connect(mapStateToProps, { addPostIdActionType })(Post);