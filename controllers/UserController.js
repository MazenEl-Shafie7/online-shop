const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('config');


const login = (req, res, next) => {
    //let userData = User(req.body);
    let userName = req.body.name;
    User.findOne({ name: userName }, function (err, userInfo) {
        if (err) {
            next(err);
        } else {
            if (req.body.password === userInfo.password) {
                const tokenGenerated = jwt.sign({ id: userInfo._id }, config.get('jwtPrivateKey'), { expiresIn: '1h' });
                userInfo.token = tokenGenerated;
                res.send(tokenGenerated);
            }
            else {
                res.send("Wrong Password! Please Try again.");
            }
        }
    })
    // userData.save(function(err, user) {
    //   if (err)
    //     res.send(err);
    //   res.json(user);
    // });
    console.log("I AM HERE");
    //console.log(userName);
    //console.log(req);
};

module.exports = { login };