import { useContext, useState } from 'react'
import PostForm from '../components/PostForm'
import { AppContext } from '../context/state'
import stylesSidebar from '../styles/Sidebar.module.css'
import { AiOutlineFileAdd } from 'react-icons/ai'

const Sidebar = () => {
  const [ formState, setForm ] = useState(null)
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
              {authorized ? <span onClick={()=>{setForm(!formState)}} className={stylesSidebar.item}>{currentLang===`EN`? `Add a Post`: `Dodaj Post`} <AiOutlineFileAdd /></span> : <></>}
              <span className={stylesSidebar.item} > item 1</span>
              <span className={stylesSidebar.item} > item 2</span>
              <span className={stylesSidebar.item} > wabbajack 3</span>
              <span className={stylesSidebar.item} > item 4</span>
              <span className={stylesSidebar.item} > item 5</span>
            </aside>
            <span className={stylesSidebar.arrow} >►</span>
       </div> 

    </>
  )
}

export default Sidebar