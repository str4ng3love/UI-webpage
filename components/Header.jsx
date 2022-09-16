import NavLI from "./NavLI"
import NavList from "./NavList"
import { useContext, useEffect } from "react"
import { AppContext } from "../context/state"
import { FaLanguage} from 'react-icons/fa'
import stylesHeader from '../styles/Header.module.css'
import UserMenu from "./UserMenu"


const Header = (props) => {
    const {lang, user} = useContext(AppContext)
    const { currentLang, setLang } = lang
    const { currentUser, setUser } = user
    const selectLang = (e) => {

        return setLang(e.target.innerHTML)   
    }

    useEffect(()=>{

        setUser(props.charName)
      }, [])
    return (
    <>
        <nav className={stylesHeader.nav}>
            <ul>        
                <NavLI dest='/' desc={currentLang==='PL'? 'Główna': 'Home'}  />
                <NavLI dest="/About" desc={currentLang==='PL'? 'O nas': 'About'} />
                <NavList />
                <UserMenu />

                <li>
                
                    <span className={stylesHeader.language}><FaLanguage size={30}/>
                        <span className={stylesHeader.flags}>
                            <span className={stylesHeader.flag} onClick={selectLang}>PL</span>
                            <span className={stylesHeader.flag} onClick={selectLang}>EN</span>
                        </span>
                    </span>
                
                </li>
            </ul>

        </nav>
    </>
  )
}


export async function getServerSideProps({req, res}) {
    const session = await getSession(req, res)
    if(session.charName){
        let charName = session.charName
        return { props: { charName }}
        
    } else {
        return { props: {  }}
    }
}
export default Header