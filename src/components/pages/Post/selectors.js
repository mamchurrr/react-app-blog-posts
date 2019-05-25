export const getPost = (state, props) => {
  const id = props.match.params.idPost;
  const localPosts = localStorage.getItem('posts');
  const posts = localPosts
    ? JSON.parse(localPosts)
    : state.blog.posts;
  const addPosts = state.sidebar.addPosts;
  const allPosts = [...new Set([...posts ,...addPosts])]

  return allPosts.find( p => p.id === Number(id))
}