import Post from "../../../models/Post"
import ConnectDB from "../../../lib/ConnectDB"

export default async function handler (req, res) {
    const query = req.query
    await ConnectDB()


    try {
        const post = await Post.findOne({title: query.post})

        res.json({post})
    } catch (error) {
        if(error){
            console.log(error)
            res.json({error})
        }
    }
}