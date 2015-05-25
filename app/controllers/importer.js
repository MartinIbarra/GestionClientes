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
        if (err) {
            return err;
        } else {
            res.render('importers', {
                importers: doc
            });
        }
    });
});

router.post('/importers/save', function(req, res, next) {
    var importer = new Importer({
        importerName: req.body.importerName,
        article: req.body.article,
        description: req.body.description,
        amount: req.body.amount,
        priceBuy: req.body.priceBuy,
        priceSell: req.body.priceSell
    });

    importer.save(function (err,doc){
        if(err) return err;
    });

    res.redirect('/importers');
});

router.post('/importers/:id', function (req, res, next){
    Importer.remove({
        _id: req.params.id
    },function (err, doc){
        if(err){
            return err;
        } else {
            console.log(doc);
            res.redirect('/importers');
        }
    });
});
