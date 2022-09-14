import { AppContext } from "../context/state"
import { useContext } from "react"
import Meta from "../components/Meta"

const About = () => {
const state = useContext(AppContext)

  return (
    <>
          <Meta title={ state.lang==='PL'? 'Useless Idea | O nas' : 'Useless Idea | About' }></Meta>
          <button onClick={async (e)=>{
              const res = await fetch('/api/session-test')
              let data = await res.json()
              console.log(data)
          }} style={{color: 'black'}}>session go!</button>
          <button onClick={async (e)=>{
              const res = await fetch('/api/test')
              let data = await res.json()
              console.log(data)
          }} style={{color: 'black'}}>session test!</button>
          
        
       
    </>
  )
}

export default About