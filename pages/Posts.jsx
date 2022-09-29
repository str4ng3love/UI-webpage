import { AppContext } from "../context/state"
import { getSession } from '../lib/get-session'
import { useContext, useEffect, useState  } from "react"
import Meta from "../components/Meta"
import Sidebar from "../components/Sidebar"
import Spinner_Mini from "../components/Spinner_Mini"
import Error from "../components/Error"
import PostThumb from "../components/PostThumb"
import stylesPosts from '../styles/Posts.module.css'
import getPosts from "../hooks/getPosts"

export default function Posts(props) {
  const {lang, user, corp}= useContext(AppContext)
  const {currentLang} = lang
  const {currentUser, setUser} = user
  const {currentCorp} = corp
  const [readyPosts, setReadyPosts] = useState()
  const [cat, setCat] = useState(`All`)
  const { posts, isLoading, isError } = getPosts()
  

  const trueCorp = parseInt(process.env.NEXT_PUBLIC_trueCorp)
  let authorized = trueCorp === currentCorp
  
  const checkIfAuthed = () =>{
    let filtered
    if(posts){
    filtered = posts.posts.filter(el => {
      if(!authorized || !authorized && !currentCorp){
        return el.meta.scope === 'Public'
      }else {
        return el
      }
  
    })}
    setReadyPosts(filtered)
  }
  useEffect(()=>{
  setUser(props.user)
  }, [])

useEffect(()=> {
  checkIfAuthed()
}, [posts])



  if(isLoading) return <Spinner_Mini/>
  if(isError) return <Error />
  return (
    <>
    <Meta title={ currentLang==='PL'? 'Useless Idea | Posty' : 'Useless Idea | Posts' }  />
    <div className={stylesPosts.container}>
    <Sidebar onClick={(e)=>setCat(e.target.innerHTML)} />

    {readyPosts ? 
 
    <div className={stylesPosts.gridContainer}>
      <h2 className={stylesPosts.heading}>{ currentLang==='PL'? 'Widisz' : 'Viewing' } : {cat}</h2>
      <div className={stylesPosts.thumbGallery}>
        {
          cat ==="Swag" ? readyPosts.filter(el => el.meta.category === cat).map((post)=>
            <PostThumb key={post._id} postId={post._id} title={post.title} description={post.description} author={post.meta.author} />)
            : cat ==="News" ?  readyPosts.filter(el => el.meta.category === cat).map((post)=>
            <PostThumb key={post._id} postId={post._id} title={post.title} description={post.description} author={post.meta.author} />)
            : cat ==="Tutorial" ?  readyPosts.filter(el => el.meta.category === cat).map((post)=>
            <PostThumb key={post._id} postId={post._id} title={post.title} description={post.description} author={post.meta.author} />)
            : readyPosts.map((post)=>
            <PostThumb key={post._id} postId={post._id} title={post.title} description={post.description} author={post.meta.author} />)
      }
          

      </div> 
    </div>
   
    : <h2 className={stylesPosts.heading}>{currentLang === `EN` ? `Nothing posted yet.`: `Brak publikacji.`}</h2>}
    
        
    </div>
    </>
  )
}

export async function getServerSideProps({req, res}) {

    const session = await getSession(req, res)
    if(session.charName){
      let charId = session.charId
      let charName = session.charName
      let tokenExp = session.tokenExp
      return { 
        props: { 
      
          user: {
            charId, charName, tokenExp
          }
         }
      }
    } else {
      return  {
        props: {
      
        }
      }
    }
  }