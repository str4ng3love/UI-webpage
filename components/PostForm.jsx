
import stylesPostForm from '../styles/PostForm.module.css'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/state'

const PostForm = (props) => {
    
const {user} = useContext(AppContext)
const {currentUser} = user
const [msg, setMsg] = useState()
const [title, setTitle] = useState('')
const [scope, setScope ] = useState('Private')
const [category, setCategory] = useState()
const [description, setDescription] = useState()
const [type, setType] = useState('Paragraph')
const [components, setComponents] = useState([])
const [comp, setComp] = useState({
    label: type,
    id: components.length,
})
const [formData, setFormData ] = useState({objects: {}}) 


const handleChange = (e, id) => {
    e.preventDefault()

    setFormData((state)=>{
        const newObj = {...state.objects};
        newObj[`${id}`] = { value: e.target.value, id: id}
        return {objects: newObj}
    })
   
}


const RemoveComponent=(id)=>{
  
    let compsCopy = Array.from(components)
    let newComps = compsCopy.filter(entry =>{
        return entry.id !== id
    })
    setComponents(newComps)

    if(formData.objects.length > 0){
        let formCopy = Array.from(formData)
        let newForm = formCopy.filter(entry=>{
            return entry.objects.id !== id
        })
   
        setFormData(newForm)
    } 
}

const handleSubmit = async () => {
    let content = components
    let formDataArray = Object.entries(formData.objects)
  
    for(let i = 0; i < content.length; i++){
        for (let j = 0; j < formDataArray.length; j++){
            if(formDataArray[j][1].id === content[i].id){
                let formValue = formDataArray[j][1].value
                content[i].value = formValue
           }
        }  
    }
    let payload = {
        title,
        description,
        content,
        meta: {
            author: currentUser.charName,
            authorId: currentUser.charId,
            scope,
            category,
            createdAt: Date.now() + 7200000

        }
    }

    let resp = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({payload})
    })
    let data = await resp.json()
    
    setMsg(data.msg)

}

useEffect(()=>{

    setComp({
        label: type,
        id: Date.now(),
    }) 

 
}, [components, type, formData])

  return (
    <>
    <div className={stylesPostForm.container}>
        <form onSubmit={(e)=> {
                e.preventDefault()
                handleSubmit()
            }} className={stylesPostForm.form}>

            <div className={stylesPostForm.field}>
                <label>Title:</label>
                <input value={title} required minLength={3} onChange={(e)=> setTitle(e.target.value)} type="text" />
            </div>

            <div className={stylesPostForm.field}>
                <label>Description:</label>
                <input value={description} required minLength={3} onChange={(e)=> setDescription(e.target.value)} type="text" />
            </div>
            <div className={stylesPostForm.field}>
                <label>Scope:</label>
                <select  name="scope" defaultValue={scope} onChange={(e)=>{setScope(e.target.value)}}>
                    <option>Private</option>
                    <option>Public</option>
               </select>
            </div>
            <div className={stylesPostForm.field}>
                <label>Category:</label>
                <select  name="category" defaultValue={category} onChange={(e)=>{setCategory(e.target.value)}} >
                    <option>News</option>
                    <option>Tutorial</option>
                    <option>Swag</option>
               </select>
            </div>
            {components.length!==0 && components.map((component)=> 
                <div key={component.id} className={stylesPostForm.field}>
                    <label >{component.label}</label>
                    {component.label!== `Paragraph` ?<input required key={component.id} value={formData.objects[`${component.id}`]?.value || ""} onChange={(e)=>handleChange(e, component.id)} type="text" />   : <textarea required key={component.id} value={formData.objects[`${component.id}`]?.value || ""} onChange={(e)=>handleChange(e, component.id)} cols="30" rows="10" ></textarea>}
                    <button onClick={(e)=>{
            e.preventDefault();
                RemoveComponent(component.id)}} className={stylesPostForm.btnX}>X</button>
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
                        <option>Subtitle</option>
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
           { msg ? <div className={stylesPostForm.field}>
              <p>{msg}</p>
            </div>: <></>}
            <button className={stylesPostForm.btn}>SUBMIT</button>
            <div onClick={props.onClick} className={stylesPostForm.btn}>CANCEL</div>
        </form>
      
    </div>
  
    </>
  )
}

export default PostForm