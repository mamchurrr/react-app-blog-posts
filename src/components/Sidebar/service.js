const BASE_URL = 'https://simple-blog-api.crew.red'


export const createPost = postData => {
    const url = `${BASE_URL}/posts`

    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(res => res.json())
}

export const createComment = (commentData) => {
  const url = `${BASE_URL}/comments`

  return fetch(url, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
}