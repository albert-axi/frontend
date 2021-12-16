import { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const PostsPage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/posts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })

    }, [])

    const renderPosts = () => posts.map(post => (<li key={uuidv4()}>{post.title}</li>))

    return (
        <>
            <h1>Posts Page</h1>
            <ul>
                {renderPosts()}
            </ul>
        </>
    )
}

export default PostsPage