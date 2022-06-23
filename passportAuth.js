const Localstrategy = require('passport-local').Strategy

function passportAuth(passport){
passport.use(new Localstrategy({username:myemail}))
}
module.exports = passportAuth