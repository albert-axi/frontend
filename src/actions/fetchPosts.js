export default function fetchPosts() {
    return (dispatch) => {
        dispatch({ type: 'FETCH_POSTS_REQUEST' });

        fetch('http://localhost:3000/posts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => res.json())
            .then(posts => dispatch({ type: 'FETCH_POSTS', posts }))
    };
}