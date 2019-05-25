import { getPosts } from './service'

export const startFetchPostsActionType = () => ({ type: 'START_FETCH_POSTS' })
export const successFetchPostsActionType = posts => ({ type: 'SACCES_FETCH_POSTS', posts })
export const stopFetchPostsActionType = () => ({ type: 'STOP_FETCH_POSTS' })
export const failFetchPostsActionType = () => ({ type: 'FAIL_FETCH_POSTS' })

export const fetchPostAction = () => dispatch => {
    dispatch(startFetchPostsActionType());
    
    getPosts()
        .then(posts => {
            console.log(posts)
            dispatch(successFetchPostsActionType(posts))
            localStorage.setItem('posts', JSON.stringify(posts))
            setTimeout(() => {
                dispatch(stopFetchPostsActionType())
            }, 1000);
            
        })
}


