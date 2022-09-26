import { useContext, useState } from 'react'
import Link from 'next/link'
import PostForm from '../components/PostForm'
import { AppContext } from '../context/state'
import stylesSidebar from '../styles/Sidebar.module.css'
import { AiOutlineFileAdd, AiOutlineMenu } from 'react-icons/ai'

const Sidebar = (props) => {
  const [ formState, setForm ] = useState(null)
  const [showSubMenu, setShowSubMenu] = useState()
  const {lang, user, corp} = useContext(AppContext)
  const {currentLang} = lang
  const {currentUser} = user
  const {currentCorp} = corp
  const authorized = currentCorp === parseInt(process.env.NEXT_PUBLIC_trueCorp)

  return (
    <>
        {formState ?   <PostForm /> : <></>}
       <div className={stylesSidebar.container} >
            <aside className={stylesSidebar.sidebar}>
              {authorized ? <span onClick={()=>{setForm(!formState)}} className={stylesSidebar.create}>{currentLang===`EN`? `Add a Post`: `Dodaj Post`}<AiOutlineFileAdd /></span> : <></>}
            <div className={stylesSidebar.item}>
              <div className={stylesSidebar.itemContainer}>
              <Link href={'/Posts'}><span className={stylesSidebar.label}>{currentLang ==='EN'? `Posts` : `Posty`}</span></Link>  
                <span onClick={()=>setShowSubMenu(!showSubMenu)} className={stylesSidebar.label} ><AiOutlineMenu /></span> 
              </div>
              {
                showSubMenu? 
                <div className={stylesSidebar.subBox}>
                <span onClick={props.onClick} className={stylesSidebar.label} >All</span> 
                <span onClick={props.onClick} className={stylesSidebar.label} >News</span> 
                <span onClick={props.onClick} className={stylesSidebar.label} >Tutorial</span> 
                <span onClick={props.onClick} className={stylesSidebar.label} >Swag</span> 
                </div>
                : 
                <></>
              }

            </div>
 
            </aside>
            <span className={stylesSidebar.arrow} >►</span>
       </div> 

    </>
  )
}

export default Sidebar