const initialState = {
    postId: '',
    commentsPost: []
}

export default function(state = initialState, action) {
    console.log('Post', action)
    switch (action.type) {
        case "ADD_POST_ID":
            return {
                ...state,
                postId: action.postId
            }
        case "ADD_COMMENTS_POST":
            return {
                ...state,
                commentsPost: action.commentsPost
            }
        default: return state
    }
}

