import { AppContext } from "../context/state"
import { getSession } from '../lib/get-session'
import Post from '../models/Post'
import ConnectDB from '../lib/ConnectDB'
import { useContext, useEffect, useState  } from "react"
import Meta from "../components/Meta"
import Sidebar from "../components/Sidebar"
import PostThumb from "../components/PostThumb"
import stylesPosts from '../styles/Posts.module.css'


export default function Posts(props) {
  const {lang, user, corp}= useContext(AppContext)
  const {currentLang} = lang
  const {currentUser, setUser} = user
  const {currentCorp} = corp
  const posts = JSON.parse(props.jsonPosts)
  const trueCorp = parseInt(process.env.NEXT_PUBLIC_trueCorp)
  let parsing = trueCorp === currentCorp


useEffect(()=>{

  setUser(props.user)
}, [])
  return (
    <>
    <Meta title={ currentLang==='PL'? 'Useless Idea | Posty' : 'Useless Idea | Posts' }  />
    <Sidebar />
    
    {props.jsonPosts ? 
    <div className={stylesPosts.thumbGallery}>
      {posts.map((post)=>
        
        <PostThumb key={post._id} title={post.title} excerpt={post.excerpt} author={post.meta.author} />
      )}

    </div> 
      
   
    : <></>}
    
        
    </>
  )
}


export async function getServerSideProps({req, res}) {
  await ConnectDB()
    const session = await getSession(req, res)
    let posts = await Post.find().select('_id meta.author meta.createdAt title excerpt')
    
    let jsonPosts = JSON.stringify(posts)
    if(session.charName){
      let charId = session.charId
      let charName = session.charName
      let tokenExp = session.tokenExp
      return { 
        props: { 
       jsonPosts,
          user: {
            charId, charName, tokenExp
          }
         }
      }
    } else {
      return  {
        props: {
       jsonPosts,
        }
      }
    }
  }