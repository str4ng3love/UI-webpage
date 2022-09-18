import { getSession } from "../../lib/get-session";


export default async function handler (req, res) {
   const session = await getSession(req, res)

    if (session) {
        await session.destroy()
    res.json({msg: `Logged out.`})
    }
}