"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Clients');

var ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    numberId: {
        type: Number
    },
    phone: {
        type: Number,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    model: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});

var Client = mongoose.model('Clients', ClientSchema);

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
    } else {
        console.log(doc);
    }
});

exports.getAllClients = function(callback){
	var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function(callback) {
        Client.find(function(err, doc){
        	if(err){
        		return console.log(err);
        	} else{
        		console.log(doc);
        		callback('',doc);
        	}
        });
    });
};