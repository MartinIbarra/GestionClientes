"use strict";
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/localDB');

var ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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

mongoose.model('clients', ClientSchema);