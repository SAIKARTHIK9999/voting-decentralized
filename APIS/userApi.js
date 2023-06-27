const exp = require('express');
const bcryptjs = require('bcryptjs');
const userApp = exp.Router()
const asyncexpresshandler = require('express-async-handler')
const jsonwebtoken = require('jsonwebtoken')
require('dotenv').config()
userApp.use(exp.json())

userApp.post('/create-user', asyncexpresshandler(async(request, response)=>{
    let userscollectionObj = request.app.get('userscollection')
    let newUserObj = request.body 
    let userOfDB = await userscollectionObj.findOne({username:newUserObj.username})
    if(userOfDB !== null){
        response.send({message: 'User already exists'})
    }
    else{
        let hashp =await bcryptjs.hash(newUserObj.password, 6)
        newUserObj.password = hashp
        await userscollectionObj.insertOne(newUserObj)
        response.send({message:'New User Created'})
    }
}))

module.exports = userApp;