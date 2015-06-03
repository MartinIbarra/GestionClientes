'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Client = mongoose.model('clients');


module.exports = function(app) {
    app.use('/', router);
};

router.get('/users', function (req, res, next) {
    Client.find(function (err, users) {
        if (err) return err;
        res.render('users', {
            users: users
        });
    });
});

router.post('/users/save', function (req, res, next) {
    var User = new Client({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        problem: req.body.problem,
        model: req.body.problem,
        amount: req.body.amount,
        type: req.body.type
    });

    User.save(function (err, doc) {
        if (err) return err;
        console.log('se agregó al usuario ' + doc);
        res.redirect('/users');
    });
});

router.post('/users/:id', function (req, res, next) {
    Client.remove({
        _id: req.params.id
    }, function (err, doc) {
        if (err) return err;
        console.log('se elimino al usuario ' + doc);
        res.redirect('/users');
    });
});