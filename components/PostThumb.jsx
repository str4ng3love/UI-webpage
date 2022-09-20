import stylesPostThumb from '../styles/PostThumb.module.css'
import Link from 'next/link'
const PostThumb = (props) => {
  return (
    <>
    <Link href={`/post/${props.title}`} >
        <div className={stylesPostThumb.container}>
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
      </Link>
    </>
  )
}

export default PostThumb