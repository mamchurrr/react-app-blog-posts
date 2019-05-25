const initialState = {
    posts: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "SACCES_FETCH_POSTS":
            return {
                ...state,
                posts: [...action.posts]
            }
        default: return state
    }
    
}