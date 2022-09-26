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
        <div key={post._id} className={stylesPost.container}>
        
        
            <h2>{post.post.title}</h2>
            <div className={stylesPost.author}>
                <span>by {post.post.meta.author}</span>
                <span>On: {post.post.meta.createdAt}</span>
            </div> 
         
            
            
            {
            post.post.content ?
            
            post.post.content.map((el)=> {
                if(el.label === `Paragraph`){
                    return <p key={el.id}>{el.value}</p>
                } 
                if(el.label === `Image`){
                    return <img key={el.id} src={el.value} />
                }
                if(el.label === `Video`){
                    return <iframe key={el.id} className={stylesPost.video} width="560" height="315" src={el.value} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                }
                }
            )
            
            
        :
         <>
         
         </>
        }
    
            
        </div>
        
        </>
    )
}

export default Post