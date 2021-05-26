const passport = require('passport')

exports.userAuth = passport.authenticate('jwt', { session: false })
