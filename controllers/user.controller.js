const User = require('../models/user.model');

exports.create_user =  (req, res ) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rating: req.body.rating,
        role: req.body.role,
    })
 
    user.save( err => {
        if( err ){
            return res.status(500).send({message: err});
        }
        res.status(201).send({message: 'User Created Scuccesfully'});
    });
};

exports.users= (req, res) =>{
    const query = req.querymen;
    User.find(query.query, query.select, query.cursor,  (err, users) => {
        if(err){
            return res.send('No users found.');
        }
        res.send(users);
    });
};

exports.custom_schema_users= (req, res) =>{
    const query = req.querymen;
    User.find(query.query, query.select,query.cursor,  (err, users) => {
        if(err){
            return res.send('No users found.');
        }
        res.send(users);
    });
};

exports.reuseable_schema = (req, res) =>{
    const query = req.querymen;
    console.log('query.query', query.query);
    User.find( query.query, query.select,query.cursor,  (err, users) => {
        if(err){
            return res.send('No users found.');
        }
        res.send(users);
    })
};