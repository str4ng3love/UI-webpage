import stylesNavList from '../styles/NavList.module.css'

const NavList = () => {
  return (
    <>
        <li>
            <span className={stylesNavList.logo}>UI | Ω
                <div className={stylesNavList.menu}>
                    <a className={stylesNavList.item} href="https://zkillboard.com/corporation/98067874/" target="_blank" rel="noopener noreferrer">zKillboard</a>
                    <a className={stylesNavList.item} href="https://www.facebook.com/uselessidea.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a className={stylesNavList.item}>POS 3</a>
                </div>
            </span>
        </li>
    </>
  )
}

export default NavList