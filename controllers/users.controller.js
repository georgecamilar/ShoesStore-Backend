const User = require('../models/user.model');

exports.login = function(req,res){
    let Username = req.body.username;
    let Password = req.body.password;

    User.findOne({username : Username , password : Password},function(err,user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        if(!user){
            console.log("User not found!");
            return res.status(404).send();
        }
        console.log("worked!");
        return res.status(202).send();
    })
};

exports.create = function(req,res){
    let user = new User(
        {
            username: req.body.username,
            password: req.body.password
        }
    );

    user.save(function(err){
        if(err){
            console.log(err);
            return err;
        }
        res.send('User created succesfully!')
    })
};

exports.test_data = function(req,res){
    
  //console.log("Macar intru in functiie");  
  let user = req.body.username;
  let pass = req.body.password;

  res.send(user + " // "+ pass);
}


