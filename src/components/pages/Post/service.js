const BASE_URL = 'https://simple-blog-api.crew.red'

export const fetchComments = postId => {
    
    const url = `${BASE_URL}/posts/${postId}?_embed=comments`

    return fetch(url)
        .then(res => {
            return res.json()
        })
}