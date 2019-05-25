const initialState = {
    posts: [],
}

export default function (state = initialState, action) {
    console.log("BLOG_REDUCER", action)
    switch (action.type) {
        case "SACCES_FETCH_POSTS":
            return {
                ...state,
                posts: [...action.posts]
            }
        default: return state
    }
    
}