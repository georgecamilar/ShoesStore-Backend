var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var User = mongoose.model("user");

passport.use(new LocalStrategy({
    usernameField: 'user[username]',
    passwordField: 'pass[password]'
}))