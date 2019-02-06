const Shoes = require('../models/shoes.model');

exports.test = function(req,res){
    res.send('Greeting from the test Controller');
};
    

exports.preview = function(req,res){
    res.send("Networking works");
};

exports.shoesDetails = function(req,res){
    Shoes.findById(req.params.id,function(err,shoes){
        if(err) return next(err);
        res.send(shoes);
    })
};
exports.getAll = function(req,res){
   return Shoes.find();
}

exports.shoes_delete = function(req,res){
    Shoes.findByIdAndDelete(req.params.id,function(err,shoes){
        if(err)return next(err);
        res.send(shoes + 'deleted');
    })
}

exports.shoes_update = function(req,res){
    Shoes.findByIdAndUpdate(req.params.id,{$set: req.body},function(err,shoes){
        if(err) return next(err);
        res.send("Shoes pair updated.");

    })
}

exports.create = function(req,res){
    let shoes = new Shoes(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    shoes.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Shoes pair created succesfully!')
    })
};