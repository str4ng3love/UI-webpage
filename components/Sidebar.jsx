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
        {formState ?   <PostForm onClick={(e)=> {setForm(!formState)}}/> : <></>}
       <div className={stylesSidebar.container} >
            <aside className={stylesSidebar.sidebar}>
              {authorized ? <span onClick={()=>{setForm(!formState)}} className={stylesSidebar.create}>{currentLang===`EN`? `Add a Post`: `Dodaj Post`}<AiOutlineFileAdd /></span> : <></>}
            <div className={stylesSidebar.item}>
              <div className={stylesSidebar.itemContainer}>
              <span className={stylesSidebar.labelEmpty}>{currentLang ==='EN'? `Posts :` : `Posty :`}</span> 
              </div>
                <div className={stylesSidebar.subBox}>
                <span onClick={props.onClick} className={stylesSidebar.labelInside} >All</span> 
                <span onClick={props.onClick} className={stylesSidebar.labelInside} >News</span> 
                <span onClick={props.onClick} className={stylesSidebar.labelInside} >Tutorial</span> 
                <span onClick={props.onClick} className={stylesSidebar.labelInside} >Swag</span> 
                </div>

            </div>
 
            </aside>
       </div> 

    </>
  )
}

export default Sidebar