'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Importer = mongoose.model('importers');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/importers', function (req, res, next){
    Importer.find(function (err, doc) {
        if (err) return err;
        res.render('importers', {
            importers: doc
        });
    });
});

router.post('/importers/save', function (req, res, next) {
    var UserImporter = new Importer({
        importerName: req.body.importerName,
        article: req.body.article,
        description: req.body.description,
        amount: req.body.amount,
        priceBuy: req.body.priceBuy,
        priceSell: req.body.priceSell
    });

    UserImporter.save(function (err, doc){
        if(err) return err;
        console.log(doc + ' have saved succesfull!!');
        res.redirect('/importers');
    });
});

router.get('/importer/:name', function (req, res, next) {
    Importer.find({
        importerName: req.params.name
    }, function (err, doc) {
        if (err) return err;
        res.render('importerInfo', {
            importerInfo: doc
        });
        console.log('esta es la info del get a la DB importers: ' + doc);
    });
});

router.post('/importers/:id', function (req, res, next){
    Importer.remove({
        _id: req.params.id
    },function (err, doc){
        if(err) return err;
        console.log('se elimino el usuario: '+ doc);
        res.redirect('/importers');
    });
});