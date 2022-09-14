import User from "../../models/User";
import { getSession } from "../../lib/get-session";
import connectDB from '../../utils/connectMongo'
import { ExtractData } from "../../utils/ExtractData";
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
         
         await connectDB()
         const user = await User.findOne({charName: JWTpayload.name }).select('charName')
         if(!user.charName){
               await User.create({
               charName: JWTpayload.name,
               charId: JWTpayload.sub,
               refreshToken: token.refresh_token 
               })
         return JWTpayload.name   
         } else {
         return await user.charName
         }

      } catch (error) {
         console.log(error)
      }
      session.v = 1
   }
let charName = await GetToken()
   console.log(charName)
    session.charName = charName
    res.redirect('/')
}