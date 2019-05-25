import { fetchComments } from './service'

export const addPostIdActionType = postId => ({ type: 'ADD_POST_ID', postId})

export const addCommentsPostActionType = commentsPost => ({ type: 'ADD_COMMENTS_POST', commentsPost})
export const fetchCommentsAction = postId => dispatch => {
    fetchComments(postId)
        .then(commentsData => {
            const { comments } = commentsData
            dispatch(addCommentsPostActionType(comments))
        })
}