"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Clients');

var ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Products:{
        type: Array,
    },
    phone: {
        type: Number,
        required: true
    },
    mail:{
        type:String
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

module.exports = function(){
	return mongoose.model('Clients', ClientSchema);
};