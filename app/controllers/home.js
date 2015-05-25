'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/', function(req, res, next) {
    res.render('index', {
        title: "Instalart / Computers K.",
        user: {
            name: '',
            mail: '',
            phone: '',
            problem: '',
            model: '',
            type: '',
            amount: ''
        },
        importer: {
            article: '',
            importerName: '',
            description: '',
            amount: '',
            priceBuy: '',
            priceSell: ''
        }
    });
});