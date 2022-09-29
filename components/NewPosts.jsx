import useSWR from "swr"
import fetcher from '../hooks/fetcher'
import PostCard from "./PostCard"
import Spinner_Mini from '../components/Spinner_Mini'
import Error from '../components/Error'
import stylesNewPosts from '../styles/NewPosts.module.css'
import { useContext } from "react"
import { AppContext } from "../context/state"
const NewPosts = () => {
const {lang} = useContext(AppContext)
const {currentLang} = lang
const { data, error } = useSWR(`/api/posts/postNewest`, fetcher);
if(error) return <Error />
return (
<div className={stylesNewPosts.postsContainer}>
    <div className={stylesNewPosts.headings}>
        <h2 className={stylesNewPosts.headingS}>{currentLang === `EN` ? 'Newest Posts':'Najnowsze Posty'}</h2>
        <h3>{currentLang === `EN` ? 'Check out our newests stuff!':'Sprawdź co dodaliśmy ostatnio!'}.</h3>
    </div>
  
    <div className={stylesNewPosts.newPosts}>
    {data ? data.map(post => <PostCard title={post.title} description={post.description} key={post._id}/>) : <Spinner_Mini /> }

    </div>
    
</div>
  )
}

export default NewPosts