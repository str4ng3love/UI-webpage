import Post from "../../../models/Post"
import ConnectDB from "../../../lib/ConnectDB"

export default async function handler (req, res) {
    if(req.method === 'GET'){

        let postObj = req.query
       

        try {
            await ConnectDB()
            if(postObj.post){
                let post = await Post.findOne({title: postObj.post})
                res.json({post})
            }
            if(postObj.postId){
                
                let post = await Post.findOne({_id: postObj.postId})
                res.json({post})
            }
            
        } catch (error) {
            if(error){
                console.log(error)
                res.json({error})
            }
        }
    }

    if(req.method === 'DELETE'){

        
        try {
            await ConnectDB()
            let id = req.body
            let deletedPost = await Post.findOneAndDelete({_id: id})
            if(deletedPost){
                res.json({msg: 'Post deleted.'})
            } else {
                res.status(404).json({msg: 'Post not found.'}) 
            }
        } catch (error) {
            if(error){
                console.log(error)
                res.json({msg: error})
            }
        }

    } 
    if(req.method === 'PUT'){
        try {
            console.log(req.body)
                await ConnectDB()
                    let post = await Post.findByIdAndUpdate(req.body.id, {title : req.body.title, excerpt: req.body.excerpt, content: req.body.content, meta:{
                        scope: req.body.meta.scope,
                        author: req.body.meta.author,
                        createdAt: req.body.meta.createdAt,
                        updated: Date.now()
                    }})
                    if(post){
                        res.json({msg: `Updated.`})
                    } else if (!post){
                        res.json({msg: 'Post Not Found.'})
                    }
                    
             
            } catch (error) {
                if(error){
                    console.log(error)
                    res.json({error})
                }
            }
 
    }

}