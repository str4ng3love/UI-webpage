import { useRouter } from "next/router";
import getPost from '../../hooks/getPost'
import Spinner_Mini from '../../components/Spinner_Mini'
import Error from '../../components/Error'
import stylesPost from '../../styles/Post.module.css'
const Post = () => {
    const router = useRouter()
    const query = router.query
    const {pid} = query
    const { post, isLoading, isError } = getPost(pid)

    if(isLoading) return <Spinner_Mini/>
    if(isError) return <Error />
    return(
        <>
        <div className={stylesPost.container}>
    
            <h2>{post.post.title}</h2>
            <div className={stylesPost.author}>
                <span>by {post.post.meta.author}</span>
                <span>On: {post.post.meta.createdAt}</span>
            </div>
            
        </div>
        
        </>
    )
}

export default Post