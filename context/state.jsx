import { useState, createContext } from "react"





const defaultLang = 'PL'
const AppContext = createContext()
const AppWrapper = ({children}) => {
  const [ currentLang , setLang ] = useState(defaultLang)
  const [ currentUser, setUser ] = useState()
  const [ currentCorp, setCorp ] = useState()
  const [ currentForm, setForm ] = useState(null)
  return (
    <AppContext.Provider value={{form: {currentForm, setForm},lang: {currentLang, setLang}, user: {currentUser, setUser}, corp: {currentCorp, setCorp}}}>
       {children}
    </AppContext.Provider>
  )
}




export { AppWrapper, AppContext } 