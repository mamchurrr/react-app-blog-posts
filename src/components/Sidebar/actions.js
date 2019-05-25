import { createPost, createComment } from './service'

export const addPostActionType = post => ({ type: 'ADD_POST', post})
export const createPostAction = postData => dispatch => {
    createPost(postData)
        .then(postData => {
            console.log(postData)
            dispatch(addPostActionType(postData))
        })
}

export const addCommentPostActionType = commentPost => ({ type: 'ADD_COMMENT_POST', commentPost})
export const createCommentPostAction = (commentData) => dispatch => {
    createComment(commentData)
        .then(commentData => {
            console.log("createComment", commentData)
            dispatch(addCommentPostActionType(commentData))
        })
}