import { SiFacebook } from 'react-icons/si'
import next from '../public/images/logotypes/next.js/dark-background/nextjs-logotype-dark-background.png'
import vercel from '../public/images/logotypes/vercel/light/vercel-logotype-light.png'
import wreck from '../public/images/wreck.png'
import Link from 'next/link'
import { useContext } from 'react'
import { LangContext } from '../context/state'
import stylesFooter from '../styles/Footer.module.css'
import Image from 'next/image'
const Footer = () => {
    const {lang} = useContext(LangContext)
  return (
    <footer className={stylesFooter.footer}>
        {lang==='PL'?
        <div className={stylesFooter.footerContainer}>
            <div className={stylesFooter.footerLinks}>
            <ul>
                 <li>
                    <Link href="/">Discord</Link>
                </li>
                <li>
                    <Link href="/">O nas</Link>
                </li>
                <li>
                    <Link href="/">Główna</Link>
                </li>
            </ul>
            <ul>
                <li><a href="https://www.facebook.com/uselessidea.co/"><SiFacebook/> Facebook</a></li>
                <li><a href="https://zkillboard.com/corporation/98067874/"><Image src={wreck} /> zKillboard</a></li>
            </ul>
            </div>
            <div className={stylesFooter.tm}>
                <span className={stylesFooter.nextspan}><a href="https://nextjs.org"> Built with <Image height={15} width={90} src={next}/></a></span>
                <span className={stylesFooter.nextspan}><a href="https://vercel.com"> Powered by <Image height={15} width={90} src={vercel}/></a></span>
            </div>
        </div>
        :
        <div className={stylesFooter.footerContainer}>
        <div className={stylesFooter.footerLinks}>
        <ul>
             <li>
                <Link href="/">Discord</Link>
            </li>
            <li>
                <Link href="/">About</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
        <ul>
            <li><a href="https://www.facebook.com/uselessidea.co/"><SiFacebook/> Facebook</a></li>
            <li><a href="https://zkillboard.com/corporation/98067874/"><Image src={wreck} /> zKillboard</a></li>
        </ul>
        </div>
        <div className={stylesFooter.tm}> 
            <span className={stylesFooter.nextspan}>
                <a href="https://nextjs.org">Built with <Image height={20} width={120} src={next}/></a>
            </span>
            <span className={stylesFooter.nextspan}>
                <a href="https://vercel.com"> Powered by <Image height={20} width={120} src={vercel}/></a>
            </span>
        </div>
    </div>
        }  
    </footer>
  )
}

export default Footer