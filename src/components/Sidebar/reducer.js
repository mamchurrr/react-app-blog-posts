const initialState = {
    addPosts: [],
    commentPost: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                addPosts: [...state.addPosts, action.post]
            }
        case "ADD_COMMENT_POST":
            return {
                ...state,
                commentPost: [...state.commentPost, action.commentPost]
            }
        default: return state
    }
    
}