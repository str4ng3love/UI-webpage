
import stylesPostForm from '../styles/PostForm.module.css'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/state'

const PostForm = () => {
const {form} = useContext(AppContext)
const {currentForm, setForm} = form
const [type, setType] = useState(`Paragraph`)
const [components, setComponents] = useState([])
const [comp, setComp] = useState({
    label: type,
    id: components.length,
})
const [ formData, setFormData ] = useState({objects: {}}) 

const handleChange = (e, id) => {

    e.preventDefault()

    setFormData((state)=>{
        const newObj = {...state.objects};
        newObj[`${id}`] = { value: e.target.value, id: id}
        return {objects: newObj}
    })
}



const RemoveComponent=()=>{

    let compsCopy = Array.from(components)
    let newComps = compsCopy.filter(entry =>{
        return entry.id !== currentForm
    })
    setComponents(newComps)

    if(formData.objects.length > 0){
        let formCopy = Array.from(formData)
        let newForm = formCopy.filter(entry=>{
            return entry.objects.id !== currentForm
        })
   
        setFormData(newForm)
    }



   
    setForm(null)
 
}
useEffect(()=>{


    setComp({
        label: type,
        id: Date.now(),
    }) 
if(components.length > 0 && currentForm !== null){
    RemoveComponent()
}
}, [currentForm, components, type])

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

            {components.length!==0 && components.map((component)=> 
                <div key={component.id} className={stylesPostForm.field}>
                    <label >{component.label}</label>
                    {component.label!== `Paragraph` ?<input key={component.id} value={formData.objects[`${component.id}`]?.value || ""} onChange={(e)=>handleChange(e, component.id)} type="text" />   : <textarea key={component.id} value={formData.objects[`${component.id}`]?.value || ""} onChange={(e)=>handleChange(e, component.id)} cols="30" rows="10" ></textarea>}
                    <button onClick={(e)=>{
            e.preventDefault();
            setForm(component.id)}} className={stylesPostForm.btnX}>X</button>
                </div>
                )
            }
            <div className={stylesPostForm.panel}>
                <div className={stylesPostForm.field}>
                    <label>Type:</label>
                    <select defaultValue={type} onChange={(e)=>{
                        setType(e.target.value)
                        }} name="types">
                        <option>Paragraph</option>
                        <option>Video</option>
                        <option>Image</option>
                    </select>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    if(comp){
                        setComponents(prevState => [...prevState, comp]) 
                    }
                }              
                } className={stylesPostForm.btn}>Add Component</button>
            </div>
            <button onClick={(e)=> {
                e.preventDefault()
            }} className={stylesPostForm.btn}>SUBMIT</button>
        </form>
      
    </div>
  
    </>
  )
}

export default PostForm