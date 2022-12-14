import { useRouter } from "next/router";
import getPost from '../../hooks/getPost'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Portrait from '../../components/Portrait'
import stylesPost from '../../styles/Post.module.css'

const Post = () => {
    const router = useRouter()
    const query = router.query
    const {pid} = query
    const { post, isLoading, isError } = getPost(pid)


    if(isLoading) return <Spinner/>
    if(isError) return <Error />
    return(
        <>
        <div className={stylesPost.container}>
            <div className={stylesPost.post}>
        
            <h2 className={stylesPost.title} >{post.post.title}</h2>
            <div className={stylesPost.author}>
                <div className={stylesPost.user}>
                <span>by {post.post.meta.author}</span>
                
                <Portrait id={post.post.meta.authorId} />
                </div>
           
            <span>On: {post.post.meta.createdAt.toString().replace('T', ' ').replace('Z', ' ').slice(0, -5)}</span>
          </div> 
           
            {
            post.post.content ?
            
            post.post.content.map((el)=> {
                if(el.label === `Paragraph`){
                    return <p className={stylesPost.paragraph} key={el.id}>{el.value}</p>
                } 
                if(el.label === `Image`){
                    return <img className={stylesPost.image} key={el.id} src={el.value} />
                }
                if(el.label === `Video`){
                    return <iframe key={el.id} className={stylesPost.video} width="560" height="315" src={el.value} title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                }
                if(el.label === `Subtitle`){
                    return <h3 className={stylesPost.subtitle} key={el.id}>{el.value}</h3>
                }
                }
            )
            
            
        :
         <>
         
         </>
        }
    
    </div>    
        </div>
        
        </>
    )
}

export default Post