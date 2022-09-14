const { SSO_CALLBACK_URL, SSO_CLIENT_ID, SSO_STATE } = process.env
const url = `https://login.eveonline.com/v2/oauth/authorize?response_type=code&redirect_uri=${encodeURIComponent(SSO_CALLBACK_URL)}&client_id=${encodeURIComponent(SSO_CLIENT_ID)}&scope=${encodeURIComponent("esi-characters.read_standings.v1")}&state=${encodeURIComponent(SSO_STATE)}`



export default async function handler(req, res)  {
    try{
        res.json(url)
    } catch(err) {
        console.log(err)
        res.status(500)
    }

} 