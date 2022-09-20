import Post from '../../models/Post'
import ConnectDB from '../../lib/ConnectDB'

export default async function handler (req, res){


   await ConnectDB()
    try {
        let post = await Post.create(req.body.payload)

        res.json({msg: `Posted Successfully.`})
    } catch (error) {
        console.log(error)
        if(error.code ===11000){
            res.json({msg: `Title exists, try a different one.`})
        }
        if(error.name ===`ValidationError`){
            res.json({msg: `Fields filled out incorectly.`})
        }
    }
}