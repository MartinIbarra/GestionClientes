"use strict";
var clients = require('../model/clients');

exports.index = function(req, res) {
    var Client = clients();
    var PrimerCliente = new Client({
        name: "Martin",
        numberId: 1,
        phone: 1530653962,
        problem: "everything is just fine",
        model: "nope",
        amount: 1,
        type: "nope"
    });

    PrimerCliente.save(function(err, doc) {
        if (err) {
            console.log(err);
        }
    });

    Client.find(function(err, doc) {
        if (err) {
            return err;
        } else {
        	console.log('este es el response: '+doc[0].name);
            res.render('index', {
                title: "to the data base",
                client: {
                    name: doc[0].name,
                    type: doc[0].type,
                    model: doc[0].model,
                    numberId: doc[0].numberId,
                    active: doc[0].active,
                    phone: doc[0].phone,
                    amount: doc[0].amount,
                    problem: doc[0].problem,
                    date: doc[0].date
                }
            });
        }
    });
};