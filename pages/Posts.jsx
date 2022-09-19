import { AppContext } from "../context/state"
import { getSession } from '../lib/get-session'
import Post from '../models/Post'
import ConnectDB from '../lib/ConnectDB'
import { useContext, useEffect, useState  } from "react"
import useSWR from "swr"
import fetcher from "../hooks/fetcher"
import Meta from "../components/Meta"
import Sidebar from "../components/Sidebar"
import PostThumb from "../components/PostThumb"
import stylesPost from '../styles/Post.module.css'

export default function Posts(props) {
  const {lang, user, corp}= useContext(AppContext)
  const {currentLang} = lang
  const { currentUser, setUser} = user
  const {currentCorp} = corp
  const posts = JSON.parse(props.posts)


const trueCorp = parseInt(process.env.NEXT_PUBLIC_trueCorp)

let parsing = trueCorp === currentCorp
useEffect(()=>{

  setUser(props.user)
}, [])
  return (
    <>
    <Meta title={ currentLang==='PL'? 'Useless Idea | Posty' : 'Useless Idea | Posts' }  />
    <Sidebar />
    
    {props.posts ? 
    <div className={stylesPost.thumbGallery}>
      {posts.map((post)=>
        <PostThumb title={post.title} excerpt={post.excerpt} author={post.meta.author} />
      )}

    </div> 
    : <></>}

    </>
  )
}


export async function getServerSideProps({req, res}) {
  await ConnectDB()
    const session = await getSession(req, res)
    let dledPosts = await Post.find().select('meta.author meta.createdAt title excerpt')
    
    let posts = JSON.stringify(dledPosts)
    if(session.charName){
      let charId = session.charId
      let charName = session.charName
      let tokenExp = session.tokenExp
      return { 
        props: { 
          posts,
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