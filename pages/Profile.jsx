import Meta from '../components/Meta'
import Post from '../models/Post'
import Link from 'next/link'
import EditPostForm from '../components/EditPostForm'
import ConnectDB from '../lib/ConnectDB'
import { useContext, useEffect, useState } from 'react'
import { getSession } from '../lib/get-session'
import { AppContext } from '../context/state'
import stylesProfile from '../styles/Profile.module.css'
import {FiEdit, FiDelete } from 'react-icons/fi'


const Profile = (props) => {
  const {lang, user, corp}= useContext(AppContext)
  const {currentLang} = lang
  const {currentUser, setUser} = user
  const [myPosts, setMyPosts] = useState(JSON.parse(props.myJsonPosts))
  const [editPost, setEditPost] = useState(null)
  

  const handleEdit = async (e) => {
    let target = e.currentTarget.getAttribute('editid')
    
        setEditPost(target)
  }

  const handleDelete = async (e) => {
    
    let target = e.currentTarget.getAttribute('deleteid')

   
    try {
      let resp = await fetch('/api/posts/post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(target)
      })
      let data = await resp.json()
       if(data.msg.includes('Post deleted')){
        let filteredPosts = myPosts.filter(post => post._id !== target)
        setMyPosts(filteredPosts)
       }
       if(data.msg === 'Post not found.'){
        let filteredPosts = myPosts.filter(post => post._id !== target)
        setMyPosts(filteredPosts)
       }
    } catch (error) {
      if(error){
        console.log(error)
      }
    }
  }

  useEffect(()=> {
   
    setUser(props.user)
  })
  return (
    <><div className={stylesProfile.container}>
      {currentUser ? <> <Meta title={currentLang === 'PL'? `Useless Idea | ${currentUser.charName} Profil` : `Useless Idea | ${currentUser.charName} Profile`} />
      {editPost ? <EditPostForm onClick={(e)=>{setEditPost(!editPost)}} id={editPost}/>: <></>}
     <div className={stylesProfile.grid}>
      <div className={stylesProfile.gridItem}>
          <h3 className={stylesProfile.myPosts}>My Posts:</h3>
          {props.myJsonPosts ? myPosts.map((post)=>
           <div  key={post._id} className={stylesProfile.gridField}>
              <Link  href={`/post/${post.title}`}>{post.title}</Link>
              <div   className={stylesProfile.links}>
              <span  editid={post._id} className={stylesProfile.edit} onClick={(e)=>{handleEdit(e)}} ><FiEdit  /></span>
              <span  deleteid={post._id} className={stylesProfile.del} onClick={(e)=>{handleDelete(e)}}  ><FiDelete  /></span> 
              </div> 
            </div>
          ) : <> <p>You haven't posted yet.</p></>}

      </div>

     </div>


</>
    : 
      <>
          <h2 className={stylesProfile.info}>
            {currentLang === 'EN' ? `You're not logged in.`: `Nie jesteś zalogowany.`}
          </h2>
      </>}
     
    </div>
    </>
  )
}

export default Profile

export async function getServerSideProps({req, res}) {
    const session = await getSession(req, res)
    if(session.charName){
      let charId = session.charId
      let charName = session.charName
      let tokenExp = session.tokenExp

      await ConnectDB()
      const posts = await Post.find({'meta.author': session.charName}).select(' _id title excerpt meta.createdAt meta.scope')
      let myJsonPosts = JSON.stringify(posts)
      return { 
        props: { 
          user: {
            charId, charName, tokenExp
          },
          myJsonPosts
         }
      }
    } else {
      return  {
        props: {
          
        }
      }
    }
  }