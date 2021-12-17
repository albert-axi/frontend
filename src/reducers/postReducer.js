export default function postReducer(posts = [], action) {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return posts
        case 'ADD_POST_REQUEST':
            return posts
        case 'DELETE_POST_REQUEST':
            return posts
        case 'FETCH_POSTS':
            return [...action.posts]
        case 'ADD_POST':
            return [...posts, action.post]
        case 'DELETE_POST':
            return posts.filter(post => post.id !== action.post.id)
        default:
            return posts
    }
}