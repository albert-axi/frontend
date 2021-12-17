import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const PostShow = () => {
    const {postId} = useParams()
    const posts = useSelector(state=>state.posts)
    const [post,setPost] = useState(null)

    console.log(postId)

    useEffect(()=>{
        let selectedPost;
        if(posts.length > 0) selectedPost = posts.find(post=> post.id === parseInt(postId))
        if(selectedPost) setPost(selectedPost)
    })

    return(
        <>
            <h1>{post?.title || "Fetching Post Information"}</h1>
            <p>{post?.content}</p>

        </>
    )
}

export default PostShow