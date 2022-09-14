import NavLI from "./NavLI"
import NavList from "./NavList"
import { useContext } from "react"
import { AppContext } from "../context/state"
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { FaLanguage} from 'react-icons/fa'
import stylesHeader from '../styles/Header.module.css'


const Header = () => {
    const {lang} = useContext(AppContext)
    const { currentLang, setLang } = lang
 
    const selectLang = (e) => {

        return setLang(e.target.innerHTML)   
    }
    return (
    <>
        <nav className={stylesHeader.nav}>
            <ul>
                <NavLI dest='/' desc={currentLang==='PL'? 'Główna': 'Home'}  />
                <NavLI dest="/About" desc={currentLang==='PL'? 'O nas': 'About'} />
                <NavList>
                </NavList>

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

export default Header

// export async function getServerSideProps(){

// }