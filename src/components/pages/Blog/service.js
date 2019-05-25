const BASE_URL = 'https://simple-blog-api.crew.red/posts'


export const getPosts = () => {
    
    const url = `${BASE_URL}`

    return fetch(url)
        .then(res => {
            return res.json()
        })
}

