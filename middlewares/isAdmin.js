const  User  = require('../user/model/user');

module.exports = (req, res, next) => {
    let _id = req.body._id;

    User.find({
         _id : _id 
    }).then(foundUser => {
        if(foundUser[0].role == "admin"){
            next();
        }else {
            res.send(`Forbidden access`)
        }
    }).catch(error => {
        res.send(`Introduce a valid user id`)
    })
};