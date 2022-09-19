import stylesPostThumb from '../styles/PostThumb.module.css'

const PostThumb = (props) => {
  return (
    <>
        <div onClick={props.onClick} className={stylesPostThumb.container}>
            <h3 className={stylesPostThumb.heading}>
                {props.title}
            </h3>
            <span className={stylesPostThumb.author}>
              by {props.author}
            </span>
            <span className={stylesPostThumb.excerpt}>
               {props.excerpt}
            </span>
        </div>
    
    </>
  )
}

export default PostThumb