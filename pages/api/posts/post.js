import Post from "../../../models/Post"


export default async function handler (req, res) {
    const query = req.query



    try {
        const post = await Post.findOne({title: query.post})

        res.json({post: {
            title: ` dziala`,
            meta: {
                author: `zenek`,
                createdAt: `teraz `
            }
        } })
    } catch (error) {
        if(error){
            console.log(error)
            res.json({error})
        }
    }
}