"use strict";
exports.index = function(req, res) {
    var Client = require('../model/clients')(),
        io = require('../app');

    res.render('index', {
        title: "to the data base"
    });

    io.on('connection', function(socket) {
        console.log('user connected: ' + Object.keys(socket));

        socket.on('userInstert', function(user) {
            var User = new Client({
                name: user.name,
                //numberId: user.numberId,
                phone: user.phone,
                problem: user.problem,
                model: user.problem,
                amount: user.amount,
                type: user.type
            });

            User.save(function(err, doc) {
                if (err) {
                    console.log(err);
                }
            });
        });

        socket.on('disconnected', function(reason) {
            console.log('user disconnected for: ' + reason);
        });
    });
};

exports.users = function (req, res){
    var Client = require('../model/clients')().find(function(err, users) {
        if (err) {
            return res.json(err);
        } else {
            res.render('users', {
                users: users
            });
        }
    });
};