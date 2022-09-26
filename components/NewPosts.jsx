import useSWR from "swr"
import fetcher from '../hooks/fetcher'
import PostCard from "./PostCard"
import Spinner_Mini from '../components/Spinner_Mini'
import Error from '../components/Error'
import stylesNewPosts from '../styles/NewPosts.module.css'
const NewPosts = () => {
const { data, error } = useSWR(`/api/posts/postNewest`, fetcher);
if(error) return <Error />
return (
<div className={stylesNewPosts.postsContainer}>
    <div className={stylesNewPosts.headings}>
        <h2 className={stylesNewPosts.headingS}>Newest Posts</h2>
        <h3>Some kind of text explaining what lies below.</h3>
    </div>
  
    <div className={stylesNewPosts.newPosts}>
    {data ? data.map(post => <PostCard title={post.title} description={post.description} key={post._id}/>) : <Spinner_Mini /> }

    </div>
    
</div>
  )
}

export default NewPosts