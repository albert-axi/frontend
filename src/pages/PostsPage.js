import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { Outlet, Route, Routes } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import fetchPosts from '../actions/fetchPosts'
// import PostShow from '../components/PostShow'

const PostsPage = () => {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const renderPosts = () => posts.map(post => (
        <Link to={`/posts/${post.id}`}>
            <li key={uuidv4()}>{post.title}</li>
        </Link>
    ))

    return (
        <>
            <h1>Posts Page</h1>
            <ul>
                {renderPosts()}
            </ul>
            {/* <Routes>
                <Route path=":postId" element={<PostShow />}/>
            </Routes> */}
            {/* <Outlet /> */}
        </>
    )
}

export default PostsPage