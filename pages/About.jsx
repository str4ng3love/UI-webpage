import { AppContext } from "../context/state"
import { getSession } from '../lib/get-session'
import { useContext, useEffect  } from "react"
import Meta from "../components/Meta"

const About = (props) => {
const {lang, user}= useContext(AppContext)
const {currentLang} = lang
const { currentUser, setUser} = user
useEffect(()=>{

  setUser(props.charName)
}, [])

  return (
    <>
          <Meta title={ currentLang==='PL'? 'Useless Idea | O nas' : 'Useless Idea | About' }></Meta>
       
          
        
       
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

export default About
