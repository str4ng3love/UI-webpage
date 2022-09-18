import User from "../../models/User";
import { getSession } from "../../lib/get-session";
import ConnectDB from '../../lib/ConnectDB'
import { ExtractData } from "../../utils/ExtractData";
import UnixToDate from "../../utils/UnixToDate";
const {
    SSO_CLIENT_ID,
    SSO_SECRET_KEY
} = process.env
let token
let JWTpayload

export default async function handler (req, res) {
   
   const session = await getSession(req, res)
    const code = req.query.code
    let buff = new Buffer.from(`${SSO_CLIENT_ID}:${SSO_SECRET_KEY}`)
    let base64data = buff.toString('base64');
    const params = `grant_type=authorization_code&code=${code}`
    
    
   const GetToken = async () => {
      try {
         const resp = await fetch('https://login.eveonline.com/v2/oauth/token', {
            method: 'POST',
            headers: {
               "Authorization" : `Basic ${base64data}`,
               "Content-Type" : "application/x-www-form-urlencoded",
               "Host": "login.eveonline.com"
            },
            body: new URLSearchParams(params)
         })
         token = await resp.json()
         
         JWTpayload = ExtractData(token.access_token)
     
         await ConnectDB()
         const user = await User.findOne({charName: JWTpayload.name })
     
         if(!user){
            let tokenExp = UnixToDate(JWTpayload.exp)
           const user = await User.create({
               charName: JWTpayload.name,
               charId: JWTpayload.sub,
               accessToken: token.access_token,
               refreshToken: token.refresh_token,
               tokenExp
               })
               
               return user
         } 
      
         return user
      } catch (error) {
         console.log(error)
      }
      
   }
let user = await GetToken()

  
   session.charId = user.charId
   session.charName = user.charName
   session.tokenExp = user.tokenExp.toString()
 
    
    res.redirect('/')
}