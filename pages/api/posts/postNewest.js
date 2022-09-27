import Post from "../../../models/Post"
import ConnectDB from "../../../lib/ConnectDB"

export default async function (req, res) {
    if(req.method === "GET"){
        ConnectDB()
        let posts = await Post.find({'meta.scope': 'Public'}).sort('-meta.createdAt').select('title description _id category').limit(3)
        res.json(posts)
    }

}