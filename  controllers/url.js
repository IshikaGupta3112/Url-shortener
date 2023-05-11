const shortid= require('shortid');
const URL = require('../models/url')

async function generateShortURL(res , req){
const body = req.body;
if(!body.url) return res.status(400).json({error:"url is required"})
const shortId = shortid();
await URL.create({
    shortId:shortId,
    redirectUrl:body.url,
    visitHistory:[]
})
return res.json({id: shortId})
}

module.exports={
    generateShortURL  
}