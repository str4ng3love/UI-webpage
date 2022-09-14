import { useState, createContext } from "react"





const defaultLang = 'PL'
const AppContext = createContext(defaultLang)
const AppWrapper = ({children}) => {
  const [ currentLang , setLang ] = useState(defaultLang)
  const [ currentUser, setUser ] = useState()
  return (
    <AppContext.Provider value={{lang: {currentLang, setLang}, user: {currentUser, setUser}}}>
       {children}
    </AppContext.Provider>
  )
}




export { AppWrapper, AppContext } 