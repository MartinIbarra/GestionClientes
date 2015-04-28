"use strict";
var clients = require('../model/clients');

exports.index = function(req, res) {
	var clientDB = clients.getAllClients();
	console.log('este es el response: '+ clientDB);
    res.render('index', {
        title: "to the data base",
        client: {
            name: clientDB.name,
            type: clientDB.type,
            model: clientDB.model,
            numberId: clientDB.numberId,
            active: clientDB.active,
            phone: clientDB.phone,
            amount: clientDB.amount,
           	problem: clientDB.problem,
           	date: clientDB.date
        }
    });
};