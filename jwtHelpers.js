const JWT = require('jsonwebtoken')
require('dotenv').config()
function jwtHelper (userid){
const payload ={
    customerid:{
        id:userid
    }
}
return JWT.sign(payload,process.env.jwtToken,{expiresIn:'1hr'})
}

module.exports = jwtHelper






