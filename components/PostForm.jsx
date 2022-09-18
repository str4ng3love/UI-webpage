import FormComponent from './FormComponent'
import stylesPostForm from '../styles/PostForm.module.css'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/state'
const PostForm = () => {
const {form} = useContext(AppContext)
const {currentForm, setForm} = form
const [type, setType] = useState(`Paragraph`)
const [components, setComponent] = useState([])
console.log(components)
const AddComponent = (e) => {
    e.preventDefault()
    setComponent(prevState => [...prevState, type])
}

const RemoveComponent=()=>{
    let deleteCount = 1
    if(currentForm === 0){
        deleteCount = 0
    }
    let newArray = components.splice(currentForm, deleteCount)
    setForm(null)
    setComponent(newArray)


    
    
}
useEffect(()=>{
   
if(components.length > 0 && currentForm !== null){
    RemoveComponent()
}


}, [currentForm, components])
  return (
    <>
    <div className={stylesPostForm.container}>
        <form className={stylesPostForm.form}>

            <div className={stylesPostForm.field}>
                <label>Title:</label>
                <input type="text" />
            </div>

            <div className={stylesPostForm.field}>
                <label>Excerpt:</label>
                <input type="text" />
            </div>

            {components.length!==0 && components.map((component, index)=> 
              
              <FormComponent type={component} key={index} id={index} />
                )
            }


            <div className={stylesPostForm.panel}>
                <div className={stylesPostForm.field}>
                    <label>Type:</label>
                    <select defaultValue={`Paragraph`} onChange={(e)=>setType(e.target.value)} name="types">
                        <option>Paragraph</option>
                        <option>Video</option>
                        <option>Image</option>
                    </select>
                </div>
                <button onClick={(e)=>AddComponent(e)} className={stylesPostForm.btn}>Add Component</button>
            </div>
            <button className={stylesPostForm.btn}>SUBMIT</button>
        </form>
      
    </div>
  
    </>
  )
}

export default PostForm