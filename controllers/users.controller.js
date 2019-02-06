const User = require('../models/user.model');

//MAXIMUM 100 USERS TO LOG IN
let tokens = [];
exports.test = function(req,res){
    res.send("working with user");
};

exports.test_data = function(req,res){
  let user = req.body.username;
  let pass = req.body.password;

  res.send(username + " // "+ password);
}

exports.login = function(req,res){
    let username = req.params.user;
    let password = req.params.pass;

    let query = {username:username};
    User.findOne(query,function(err,user){
        if(err)return next(err);
        if(!user){
            throw "No user found";
        }

        if( user.password == password ){
            generatedToken = generateToken();
            res.send(generatedToken);
        }

    })
};

function generateToken(){
  let randomToken = Math.random();
  for (let i = 0; i < tokens.length; i++) {
    if(tokens[i] == randomToken){
      randomToken=Math.random();
      i=0;
    }
    return randomToken;
  }
}

exports.signUp = function(req,res){
    let user = new User(
        {
            username: req.body.username,
            password: req.body.password
        }
    );

    user.save(function(err){
        if(err){
            return err;
        }
        res.send('User registered')
    })
};
