import stylesPostThumb from '../styles/PostThumb.module.css'

const PostThumb = (props) => {
  return (
    <>
        <div onClick={props.onClick} className={stylesPostThumb.container}>
            <h3 className={stylesPostThumb.heading}>
                jak zalozyc dobry rozmiar czapki na glowe
            </h3>
            <span className={stylesPostThumb.author}>
               by zenek
            </span>
            <span className={stylesPostThumb.excerpt}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium et animi accusantium vero minus fugiat magnam sunt molestiae quo rem.
            </span>
        </div>
    
    </>
  )
}

export default PostThumb