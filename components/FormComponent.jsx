import { AppContext } from '../context/state'
import { useContext } from 'react'
import stylesFormComponent from '../styles/FormComponent.module.css'

const FormComponent = (props) => {
const {form} = useContext(AppContext)
const {setForm} = form


  return (
    <>

        {props.type===`Paragraph` ? <div className={stylesFormComponent.field}>
          <label>{props.type}:</label>
          <textarea cols="30" rows="10"></textarea>
          <button onClick={(e)=>{
            e.preventDefault();
            setForm(props.id)}} className={stylesFormComponent.btn}>X</button>
        </div>: <></>}
        {props.type===`Image` ?  <div className={stylesFormComponent.field}>
          <label>{props.type}:</label>
          <input type="text" />
          <button onClick={(e)=>{
            e.preventDefault();
            setForm(props.id)
            }} className={stylesFormComponent.btn}>X</button>
        </div>: <></>}
        {props.type===`Video` ? <div className={stylesFormComponent.field}>
          <label>{props.type}:</label>
          <input type="text" />
          <button onClick={(e)=>{
            e.preventDefault();
            setForm(props.id)}} className={stylesFormComponent.btn}>X</button>
        </div>: <></>}
    </>
  )
}
export default FormComponent