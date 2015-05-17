"use strict";
var Client = require('../model/clients')();

exports.index = function(req, res) {
    res.render('index', {
        title: "Add some clients",
        user: {
            name: '',
            mail: '',
            phone: '',
            problem: '',
            model: '',
            type: '',
            amount: ''
        }
    });
};

exports.save = function(req, res) {
    var User = new Client({
        name: req.body.name,
        mail: req.body.mail,
        phone: req.body.phone,
        problem: req.body.problem,
        model: req.body.problem,
        amount: req.body.amount,
        type: req.body.type
    });

    User.save(function(err, doc) {
        if (err) {
            return err;
        } else {
            res.redirect('/users');
        }
    });
};

exports.users = function(req, res) {
    Client.find(function(err, users) {
        if (err) {
            return err;
        } else {
            res.render('users', {
                users: users
            });

        }
    });
};

exports.destroy = function(req, res) {
    console.log('este es el req.params.id ' + req.params);
    Client.remove({
        _id: req.params.id
    }, function(err, doc) {
        if (err) {
            return err;
        } else {
            console.log('se elimino al usuario ' + doc);
            res.redirect('/users');
        }
    });
};